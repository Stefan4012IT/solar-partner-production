"use client";

export type LeadFormType = "solarni-paneli" | "dronovi" | "sigurnosni-sistemi";

type SubmitLeadResult = {
  ok: boolean;
  skipped?: boolean;
};

const endpoint = process.env.NEXT_PUBLIC_LEADS_SCRIPT_URL;

function getStringValue(value: FormDataEntryValue) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitLeadForm(formType: LeadFormType, form: HTMLFormElement): Promise<SubmitLeadResult> {
  const formData = new FormData(form);
  const website = getStringValue(formData.get("website") ?? "");

  if (website) {
    return { ok: true, skipped: true };
  }

  if (!endpoint) {
    throw new Error("Missing NEXT_PUBLIC_LEADS_SCRIPT_URL");
  }

  const payload: Record<string, string> = {
    formType,
    submittedAt: new Date().toISOString(),
    page: window.location.pathname,
    query: window.location.search,
    locale: new URLSearchParams(window.location.search).get("lang") || "sr",
  };

  formData.forEach((value, key) => {
    if (key !== "website") {
      payload[key] = getStringValue(value);
    }
  });

  await fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
    keepalive: true,
  });

  return { ok: true };
}
