"use client";

import { useActionState } from "react";
import { Button, ChoiceGroup, PhoneField, SelectField, TextAreaField, TextField } from "@/components/ui";
import { submitInquiry } from "@/lib/inquiry/actions";
import { HONEYPOT_FIELD, initialInquiryState } from "@/lib/inquiry/schema";
import { cn } from "@/lib/utils/cn";
import type { InquiryFormContent } from "@/types/content";
import styles from "./ContactForm.module.scss";

interface ContactFormProps {
  content: InquiryFormContent;
  className?: string;
}

export function ContactForm({ content, className }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialInquiryState);
  // Posle neuspešne validacije polja zadržavaju unete vrednosti
  const { values = {}, errors = {} } = state;
  const { labels } = content;

  return (
    <form action={formAction} className={cn(styles.form, className)}>
      <h3 className={styles.heading}>{content.heading}</h3>

      <div className={styles.fields}>
        <TextField
          name="firstName"
          label={labels.firstName}
          autoComplete="given-name"
          required
          defaultValue={values.firstName}
          error={errors.firstName}
        />
        <TextField
          name="lastName"
          label={labels.lastName}
          autoComplete="family-name"
          defaultValue={values.lastName}
          error={errors.lastName}
        />
        <TextField
          name="email"
          type="email"
          label={labels.email}
          autoComplete="email"
          required
          defaultValue={values.email}
          error={errors.email}
        />
        <PhoneField
          name="phone"
          label={labels.phone}
          codeName="phoneCode"
          codeLabel={labels.phoneCode}
          codes={content.phoneCodes}
          defaultCode={values.phoneCode}
          defaultValue={values.phone}
          error={errors.phone}
        />
        <SelectField
          name="projectType"
          label={labels.projectType}
          options={content.projectTypes}
          defaultValue={values.projectType}
          error={errors.projectType}
        />
        <TextField
          name="location"
          label={labels.location}
          autoComplete="address-level2"
          defaultValue={values.location}
          error={errors.location}
        />
      </div>

      <TextAreaField
        name="message"
        label={labels.message}
        placeholder={content.messagePlaceholder}
        required
        defaultValue={values.message}
        error={errors.message}
      />

      <ChoiceGroup
        name="budget"
        legend={content.budget.legend}
        options={content.budget.options}
        defaultValue={values.budget}
      />
      <ChoiceGroup
        name="timeline"
        legend={content.timeline.legend}
        options={content.timeline.options}
        defaultValue={values.timeline}
      />

      {/* Zamka za spam botove — skrivena od posetilaca */}
      <div className="visually-hidden" aria-hidden="true">
        <label>
          Ne popunjavajte ovo polje
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.submit}>
        <Button type="submit" fullWidth disabled={pending}>
          {pending ? content.pendingLabel : content.submitLabel}
        </Button>
        <p role="status" className={cn(styles.status, state.status === "error" && styles.statusError)}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
