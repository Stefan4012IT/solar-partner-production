const SPREADSHEET_ID = "1kfWWkaOdupWBvNJNkIxXV04q4eMNq4qh57pydvMvqAw";
const NOTIFICATION_EMAILS = ["office@solarpartner.rs"];

const SHEETS = {
  "solarni-paneli": {
    name: "solarni-paneli",
    headers: ["Vreme", "Ime i prezime", "Email", "Telefon", "Stranica", "Jezik"],
    values: (data) => [data.submittedAt, data.name, data.email, text_(data.phone), data.page, data.locale],
  },
  dronovi: {
    name: "dronovi",
    headers: [
      "Vreme",
      "Ime i prezime",
      "Kompanija / institucija",
      "Telefon",
      "Email",
      "Tip primene",
      "Platforma",
      "Stranica",
      "Jezik",
    ],
    values: (data) => [
      data.submittedAt,
      data.name,
      data.company,
      text_(data.phone),
      data.email,
      data.application,
      data.platform,
      data.page,
      data.locale,
    ],
  },
  "sigurnosni-sistemi": {
    name: "sigurnosni-sistemi",
    headers: ["Vreme", "Ime i prezime", "Email", "Telefon", "Interesuje me", "Stranica", "Jezik"],
    values: (data) => [data.submittedAt, data.name, data.email, text_(data.phone), data.system, data.page, data.locale],
  },
};

function doPost(e) {
  try {
    const data = parsePayload_(e);
    const config = SHEETS[data.formType];

    if (!config) {
      return json_({ ok: false, error: "Unknown formType" });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(spreadsheet, config.name, config.headers);
    sheet.appendRow(config.values(data));
    sendLeadNotification_(config.name, data);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function doGet() {
  return json_({ ok: true, service: "Solar Partner leads" });
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing request body");
  }

  return JSON.parse(e.postData.contents);
}

function getOrCreateSheet_(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function text_(value) {
  if (!value) {
    return "";
  }

  const text = String(value).trim();
  return text.startsWith("'") ? text : "'" + text;
}

function sendLeadNotification_(sheetName, data) {
  if (!NOTIFICATION_EMAILS.length) {
    return;
  }

  const formLabels = {
    "solarni-paneli": "Solarni sistemi",
    dronovi: "Profesionalni dronovi",
    "sigurnosni-sistemi": "Sigurnosni sistemi",
  };

  const fields = [
    ["Forma", formLabels[data.formType] || sheetName],
    ["Vreme", data.submittedAt],
    ["Ime i prezime", data.name],
    ["Email", data.email],
    ["Telefon", data.phone],
    ["Kompanija / institucija", data.company],
    ["Tip primene", data.application],
    ["Platforma", data.platform],
    ["Interesuje me", data.system],
    ["Stranica", data.page],
    ["Jezik", data.locale],
  ].filter((item) => item[1]);

  const body = fields.map((item) => item[0] + ": " + item[1]).join("\n");

  MailApp.sendEmail({
    to: NOTIFICATION_EMAILS.join(","),
    subject: "Novi upit - " + (formLabels[data.formType] || sheetName),
    body: "Stigao je novi upit preko Solar Partner sajta.\n\n" + body,
  });
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
