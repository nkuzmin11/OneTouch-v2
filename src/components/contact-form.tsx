"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

import { siteConfig } from "@/config/site";

export function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`OneTouch: ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass rounded-[8px] p-6 md:p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-200">{t("eyebrow")}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-normal text-balance md:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/68">{t("text")}</p>

        <div className="mt-8 grid gap-3">
          <a
            className="focus-ring inline-flex items-center gap-3 rounded-[8px] border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/16"
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden size={18} />
            WhatsApp: {siteConfig.phoneDisplay}
          </a>
          <a
            className="focus-ring inline-flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/84 transition hover:bg-white/[0.08]"
            href={`mailto:${siteConfig.email}`}
          >
            <Mail aria-hidden size={18} />
            {siteConfig.email}
          </a>
        </div>
      </div>

      <form className="glass rounded-[8px] p-6 md:p-8" onSubmit={handleSubmit}>
        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-medium text-white/74">
            {t("form.name")}
            <input
              required
              name="name"
              autoComplete="name"
              className="focus-ring rounded-[8px] border border-white/12 bg-black/20 px-4 py-3 text-white placeholder:text-white/32"
              placeholder={t("form.namePlaceholder")}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-white/74">
            {t("form.email")}
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="focus-ring rounded-[8px] border border-white/12 bg-black/20 px-4 py-3 text-white placeholder:text-white/32"
              placeholder={t("form.emailPlaceholder")}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-white/74">
            {t("form.message")}
            <textarea
              required
              name="message"
              rows={6}
              className="focus-ring resize-y rounded-[8px] border border-white/12 bg-black/20 px-4 py-3 text-white placeholder:text-white/32"
              placeholder={t("form.messagePlaceholder")}
            />
          </label>
          <button
            type="submit"
            className="focus-ring inline-flex items-center justify-center rounded-[8px] bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[#04110a] transition hover:bg-[var(--accent-strong)]"
          >
            {t("form.submit")}
          </button>
          {sent ? <p className="text-sm text-emerald-200">{t("form.sent")}</p> : null}
        </div>
      </form>
    </div>
  );
}
