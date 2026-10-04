"use server";

import { HONEYPOT_FIELD, type InquiryState, readInquiry, validateInquiry } from "./schema";

const SUCCESS_MESSAGE = "Hvala na upitu! Javićemo vam se u najkraćem roku.";

export async function submitInquiry(_previous: InquiryState, formData: FormData): Promise<InquiryState> {
  // Bot je popunio skriveno polje — tiho ga ignorišemo
  if (formData.get(HONEYPOT_FIELD)) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const values = readInquiry(formData);
  const errors = validateInquiry(values);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Proverite označena polja i pokušajte ponovo.",
      values,
      errors,
    };
  }

  // TODO: povezati slanje upita — npr. email preko servisa (Resend, Nodemailer) ili CRM.
  // Do tada se upit samo beleži u logu servera.
  console.info("[Tetra Home] Novi upit sa sajta:", values);

  return { status: "success", message: SUCCESS_MESSAGE };
}
