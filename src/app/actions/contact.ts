"use server";

import { Resend } from "resend";

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactResult = { success: boolean; error?: string };

export async function submitContact(data: ContactFormData): Promise<ContactResult> {
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "Missing required fields" };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Dev fallback: log only — set RESEND_API_KEY in Railway env vars for production
    console.log("[Contact Form Submission]", data);
    return { success: true };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Dinnar <onboarding@resend.dev>",
      to: "hello@dinnar.us",
      replyTo: data.email,
      subject: `New inquiry — ${data.name} · ${data.company || "—"}`,
      html: `
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Company:</b> ${data.company || "—"}</p>
        <hr/>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return { success: false, error: "Send failed. Please email hello@dinnar.us directly." };
  }
}
