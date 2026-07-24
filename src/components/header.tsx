"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { localeLabels, locales, navAnchors, siteConfig, type Locale } from "@/config/site";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = navAnchors.map((item) => ({
    href: `#${item}`,
    label: t(item)
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050706]/78 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#top" className="focus-ring flex items-center gap-3" aria-label={siteConfig.name}>
          <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-emerald-300/30 bg-emerald-300/10 text-lg font-black text-emerald-200 shadow-[0_0_28px_rgba(54,217,130,0.2)]">
            1T
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold">{siteConfig.name}</span>
            <span className="block text-xs text-white/56">{siteConfig.descriptor}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("aria")}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm text-white/68 transition hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} pathname={pathname} />
          <a
            href="#contact"
            className="focus-ring inline-flex items-center justify-center rounded-[8px] bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[#04110a] transition hover:bg-[var(--accent-strong)]"
          >
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-grid h-11 w-11 place-items-center rounded-[8px] border border-white/12 bg-white/[0.04] text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t("close") : t("open")}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-white/10 bg-[#050706] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="section-shell flex flex-col gap-3 py-5">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-[8px] border border-white/10 px-4 py-3 text-base text-white/84"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-between gap-3 pt-2">
                <LanguageSwitcher locale={locale} pathname={pathname} />
                <a
                  href="#contact"
                  className="focus-ring inline-flex flex-1 items-center justify-center rounded-[8px] bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[#04110a]"
                  onClick={() => setOpen(false)}
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function LanguageSwitcher({ locale, pathname }: { locale: Locale; pathname: string }) {
  return (
    <div
      className="inline-flex rounded-[8px] border border-white/10 bg-white/[0.04] p-1"
      aria-label="Language"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={pathname}
          locale={item}
          aria-current={locale === item ? "page" : undefined}
          className={cn(
            "focus-ring rounded-[6px] px-2.5 py-1.5 text-xs font-semibold transition",
            locale === item
              ? "bg-white text-[#07100c]"
              : "text-white/58 hover:bg-white/8 hover:text-white"
          )}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
