export const locales = ["pl", "uk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

export const localeLabels: Record<Locale, string> = {
  pl: "PL",
  uk: "UA",
  en: "EN"
};

export const siteConfig = {
  name: "OneTouch",
  descriptor: "Web • SEO • NFC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@onetouch.pl",
  phoneDisplay: "+48 000 000 000",
  phoneHref: "+48000000000",
  whatsappNumber: "48000000000",
  location: "Polska",
  ogImage: "/og.png"
};

export const navAnchors = [
  "services",
  "websites",
  "projects",
  "process",
  "pricing",
  "faq",
  "contact"
] as const;
