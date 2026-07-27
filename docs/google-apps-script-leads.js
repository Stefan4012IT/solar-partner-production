const SPREADSHEET_ID = "1kfWWkaOdupWBvNJNkIxXV04q4eMNq4qh57pydvMvqAw";

const SHEETS = {
  "solarni-paneli": {
    name: "solarni-paneli",
    headers: ["Vreme", "Ime i prezime", "Email", "Telefon", "Stranica", "Jezik"],
    values: (data) => [data.submittedAt, data.name, data.email, data.phone, data.page, data.locale],
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
      data.phone,
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
    values: (data) => [data.submittedAt, data.name, data.email, data.phone, data.system, data.page, data.locale],
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

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
