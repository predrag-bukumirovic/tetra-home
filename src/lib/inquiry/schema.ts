// Polja, tipovi i validacija upita sa kontakt forme.
// Deli ih klijentska forma i server akcija.

export const inquiryFields = [
  "firstName",
  "lastName",
  "email",
  "phoneCode",
  "phone",
  "projectType",
  "location",
  "message",
  "budget",
  "timeline",
] as const;

export type InquiryField = (typeof inquiryFields)[number];
export type InquiryValues = Partial<Record<InquiryField, string>>;
export type InquiryErrors = Partial<Record<InquiryField, string>>;

export interface InquiryState {
  status: "idle" | "success" | "error";
  message?: string;
  /** Poslate vrednosti — vraćaju se u formu kada validacija ne prođe. */
  values?: InquiryValues;
  errors?: InquiryErrors;
}

export const initialInquiryState: InquiryState = { status: "idle" };

/** Skriveno polje-zamka za spam botove (ljudi ga ne vide i ne popunjavaju). */
export const HONEYPOT_FIELD = "website";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 2000;

export function readInquiry(formData: FormData): InquiryValues {
  return Object.fromEntries(
    inquiryFields.map((field) => [field, String(formData.get(field) ?? "").trim().slice(0, MAX_LENGTH)]),
  );
}

export function validateInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!values.firstName) {
    errors.firstName = "Unesite ime.";
  }

  if (!values.email) {
    errors.email = "Unesite email adresu.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Email adresa nije ispravna.";
  }

  if (!values.message || values.message.length < 10) {
    errors.message = "Opišite projekat u bar nekoliko reči.";
  }

  return errors;
}
