import { NextResponse } from "next/server";
import { Resend } from "resend";

import { serviceOptions } from "../../contact-services";

export const runtime = "nodejs";

const MAX_BODY_LENGTH = 12_000;
const DEFAULT_TO_EMAIL = "info@accolyx.com";
const DEFAULT_FROM_EMAIL = "Accolyx Website <website@accolyx.com>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return errorResponse("Please submit the enquiry form again.", 415);
  }

  const rawBody = await request.text();

  if (!rawBody || rawBody.length > MAX_BODY_LENGTH) {
    return errorResponse("Please check the form and try again.", 400);
  }

  let payload: ContactPayload;

  try {
    payload = JSON.parse(rawBody) as ContactPayload;
  } catch {
    return errorResponse("Please submit the enquiry form again.", 400);
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const service = clean(payload.service);
  const message = clean(payload.message);
  const website = clean(payload.website);

  // A hidden field catches simple form bots without inconveniencing real visitors.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const isValidService = serviceOptions.some((option) => option === service);
  const isValid =
    name.length >= 2 &&
    name.length <= 120 &&
    isEmail(email) &&
    email.length <= 254 &&
    company.length <= 160 &&
    isValidService &&
    message.length >= 10 &&
    message.length <= 5_000;

  if (!isValid) {
    return errorResponse("Please check the required fields and try again.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return errorResponse(
      "The form is temporarily unavailable. Please email info@accolyx.com.",
      503,
    );
  }

  const toEmail = process.env.CONTACT_EMAIL_TO ?? DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_EMAIL_FROM ?? DEFAULT_FROM_EMAIL;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const subject = `Accolyx enquiry: ${service}`;
  const text = [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Area of support: ${service}`,
    "",
    "Enquiry",
    message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
      html: `
      <div style="margin:0;background:#f5f4ef;padding:32px 16px;color:#111827;font-family:Arial,sans-serif;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d8dbe0;">
          <div style="background:#173f8a;padding:24px 28px;color:#ffffff;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">Accolyx website</p>
            <h1 style="margin:0;font-size:24px;line-height:1.25;">New engagement enquiry</h1>
          </div>
          <div style="padding:28px;">
            <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.55;">
              <tr><td style="width:150px;padding:8px 0;color:#606875;vertical-align:top;">Name</td><td style="padding:8px 0;font-weight:700;">${safeName}</td></tr>
              <tr><td style="padding:8px 0;color:#606875;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#173f8a;">${safeEmail}</a></td></tr>
              <tr><td style="padding:8px 0;color:#606875;vertical-align:top;">Company</td><td style="padding:8px 0;">${safeCompany}</td></tr>
              <tr><td style="padding:8px 0;color:#606875;vertical-align:top;">Area of support</td><td style="padding:8px 0;">${safeService}</td></tr>
            </table>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #d8dbe0;">
              <p style="margin:0 0 10px;color:#606875;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;">Enquiry</p>
              <p style="margin:0;font-size:16px;line-height:1.7;">${safeMessage}</p>
            </div>
          </div>
        </div>
      </div>
    `,
    });

    if (error) {
      console.error("Contact form: Resend rejected the email.", error);
      return errorResponse(
        "We could not send your enquiry. Please try again or email info@accolyx.com.",
        502,
      );
    }
  } catch (error) {
    console.error("Contact form: email delivery failed.", error);
    return errorResponse(
      "We could not send your enquiry. Please try again or email info@accolyx.com.",
      502,
    );
  }

  return NextResponse.json({ ok: true });
}
