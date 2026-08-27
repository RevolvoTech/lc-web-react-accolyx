"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, Check, LoaderCircle, Send } from "lucide-react";

import { serviceOptions } from "./contact-services";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const email = String(formData.get("email") || "");

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Please try again in a moment.");
      }

      setSubmittedEmail(email);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="contactForm formSuccess" role="status" aria-live="polite">
        <span className="formSuccessIcon" aria-hidden="true">
          <Check size={28} strokeWidth={2} />
        </span>
        <div>
          <p className="formSuccessEyebrow">Enquiry received</p>
          <h3>Form submitted</h3>
          <p>
            Thank you. We’ll review what you shared and reply to {submittedEmail}
            {" "}with a useful next step.
          </p>
        </div>
        <button
          className="button formReset"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="contactForm"
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
    >
      <div className="formIntro">
        <p>Engagement enquiry</p>
        <span>Fields marked required help us prepare a useful first response.</span>
      </div>
      <div className="formRow">
        <label>
          <span>Name <em>Required</em></span>
          <input
            name="name"
            placeholder="Your name…"
            autoComplete="name"
            minLength={2}
            maxLength={120}
            required
          />
        </label>
        <label>
          <span>Work email <em>Required</em></span>
          <input
            name="email"
            placeholder="name@company.com…"
            type="email"
            autoComplete="email"
            spellCheck={false}
            maxLength={254}
            required
          />
        </label>
      </div>

      <div className="formRow">
        <label>
          <span>Company</span>
          <input
            name="company"
            placeholder="Company name…"
            autoComplete="organization"
            maxLength={160}
          />
        </label>
        <label>
          <span>Area of support <em>Required</em></span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option value={service} key={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>What would you like to improve? <em>Required</em></span>
        <textarea
          name="message"
          placeholder="Share the current challenge, timing, and the outcome you need…"
          rows={5}
          minLength={10}
          maxLength={5000}
          required
        />
      </label>

      <label className="formHoneypot" aria-hidden="true">
        <span>Website</span>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button
        className="button formSubmit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending enquiry…" : "Send enquiry"}
        {status === "submitting" ? (
          <LoaderCircle
            className="formSpinner"
            aria-hidden="true"
            size={17}
            strokeWidth={2}
          />
        ) : (
          <Send aria-hidden="true" size={17} strokeWidth={2} />
        )}
      </button>
      <p
        className={`formStatus${status === "error" ? " isError" : ""}`}
        role={status === "error" ? "alert" : undefined}
        aria-live="polite"
      >
        {status === "error" ? (
          <>
            <AlertCircle aria-hidden="true" size={15} strokeWidth={2} />
            <span>{feedback}</span>
          </>
        ) : null}
      </p>
    </form>
  );
}
