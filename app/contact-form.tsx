"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "Accounting",
  "IFRS",
  "Advisory",
  "Internal Audit",
  "IT Audit & Cyber Security",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");
    const subject = `Accolyx enquiry: ${service}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    setStatus("Opening your email application...");
    window.location.href = `mailto:info@accolyx.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formRow">
        <label>
          <span>Name</span>
          <input name="name" placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input
            name="email"
            placeholder="name@company.com"
            type="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="formRow">
        <label>
          <span>Company</span>
          <input
            name="company"
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
        <label>
          <span>Area of support</span>
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
        <span>What would you like to improve?</span>
        <textarea
          name="message"
          placeholder="Share the current challenge, timing, and the outcome you need."
          rows={5}
          required
        />
      </label>

      <button className="button formSubmit" type="submit">
        Prepare enquiry
        <Send aria-hidden="true" size={17} strokeWidth={2} />
      </button>
      <p className="formStatus" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
