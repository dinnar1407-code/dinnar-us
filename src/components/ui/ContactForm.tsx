"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";

export interface ContactFormLabels {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  successTitle: string;
  successBody: string;
}

export function ContactForm({ labels }: { labels: ContactFormLabels }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    const result = await submitContact({
      name: (fd.get("name") as string) ?? "",
      email: (fd.get("email") as string) ?? "",
      company: (fd.get("company") as string) ?? "",
      message: (fd.get("message") as string) ?? "",
    });
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10 max-w-lg mx-auto">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-white">{labels.successTitle}</h3>
        <p className="text-white/70 mt-2">{labels.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name" type="text" required
          placeholder={labels.name}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
        />
        <input
          name="email" type="email" required
          placeholder={labels.email}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
        />
      </div>
      <input
        name="company" type="text"
        placeholder={labels.company}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
      />
      <textarea
        name="message" rows={4} required
        placeholder={labels.message}
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm resize-none"
      />
      {status === "error" && (
        <p className="text-red-300 text-sm">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-white w-full py-3.5 font-semibold text-brand-600 disabled:opacity-60"
      >
        {status === "loading" ? "…" : labels.submit}
      </button>
    </form>
  );
}
