"use client";

import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ExternalLink,
  Globe2,
  ImageIcon,
  Layers,
  MapPin,
  MessageCircle,
  Search,
  ShoppingCart,
  SmartphoneNfc,
  Sparkles,
  Store
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import { ContactForm } from "./contact-form";
import { Header } from "./header";
import { Badge, Reveal } from "./reveal";

type CardItem = {
  title: string;
  text: string;
};

type ServiceItem = CardItem & {
  icon: keyof typeof iconMap;
};

type PackageItem = CardItem & {
  price: string;
  features: string[];
};

type FaqItem = {
  q: string;
  a: string;
};

const iconMap = {
  websites: Globe2,
  seo: Search,
  nfc: SmartphoneNfc,
  landing: Sparkles,
  business: Layers,
  store: ShoppingCart,
  portfolio: ImageIcon,
  booking: CalendarDays,
  local: MapPin,
  check: BadgeCheck,
  shop: Store
};

export function HomePage() {
  const t = useTranslations();
  const services = t.raw("services.items") as ServiceItem[];
  const websiteTypes = t.raw("websiteTypes.items") as ServiceItem[];
  const projects = t.raw("projects.items") as CardItem[];
  const process = t.raw("process.items") as CardItem[];
  const benefits = t.raw("benefits.items") as CardItem[];
  const seo = t.raw("seo.items") as CardItem[];
  const nfc = t.raw("nfc.items") as CardItem[];
  const packages = t.raw("pricing.items") as PackageItem[];
  const faqs = t.raw("faq.items") as FaqItem[];

  return (
    <main id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="site-grid pointer-events-none absolute inset-x-0 top-0 h-[760px]"
      />
      <Header />

      <section className="section-shell relative pt-32 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge>{t("hero.eyebrow")}</Badge>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-normal text-balance md:text-7xl lg:text-8xl">
              {t("hero.title")}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              {t("hero.text")}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[8px] bg-[var(--accent)] px-5 py-3.5 text-sm font-bold text-[#04110a] transition hover:bg-[var(--accent-strong)]"
              >
                {t("hero.primary")}
                <ArrowRight aria-hidden size={18} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                <MessageCircle aria-hidden size={18} />
                {t("hero.secondary")}
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm text-white/58 sm:grid-cols-3">
              {(t.raw("hero.points") as string[]).map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <Check aria-hidden className="text-emerald-300" size={16} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[8px] p-4">
              <div className="rounded-[8px] border border-white/10 bg-[#08100d] p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm font-semibold text-white/80">{siteConfig.name}</span>
                  <span className="rounded-full bg-emerald-300/12 px-3 py-1 text-xs text-emerald-200">
                    {siteConfig.descriptor}
                  </span>
                </div>
                <div className="grid gap-4 pt-5">
                  <div className="h-28 rounded-[8px] border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(54,217,130,0.24),rgba(255,255,255,0.04)_42%,rgba(255,255,255,0.02))] p-4">
                    <div className="h-3 w-32 rounded-full bg-emerald-200/80" />
                    <div className="mt-4 h-2 w-56 max-w-full rounded-full bg-white/24" />
                    <div className="mt-2 h-2 w-40 max-w-full rounded-full bg-white/14" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {services.map((service) => {
                      const Icon = iconMap[service.icon];
                      return (
                        <div
                          key={service.title}
                          className="rounded-[8px] border border-white/10 bg-white/[0.035] p-4"
                        >
                          <Icon aria-hidden className="text-emerald-300" size={22} />
                          <p className="mt-7 text-xs font-semibold text-white/78">
                            {service.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="rounded-[8px] border border-white/10 bg-black/20 p-4">
                    <div className="flex items-end gap-2">
                      {[32, 50, 40, 64, 78, 92].map((height) => (
                        <span
                          key={height}
                          className="block flex-1 rounded-t-[5px] bg-emerald-300/70"
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal id="services" className="section-shell pt-28">
        <SectionIntro
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          text={t("services.text")}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article key={item.title} className="glass rounded-[8px] p-6">
                <Icon aria-hidden className="text-emerald-300" size={28} />
                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/64">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Reveal>

      <Reveal id="websites" className="section-shell pt-28">
        <SectionIntro
          eyebrow={t("websiteTypes.eyebrow")}
          title={t("websiteTypes.title")}
          text={t("websiteTypes.text")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {websiteTypes.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5"
              >
                <Icon aria-hidden className="text-emerald-300" size={24} />
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Reveal>

      <Reveal id="projects" className="section-shell pt-28">
        <SectionIntro
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          text={t("projects.text")}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {projects.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035]"
            >
              <div className="relative h-56 border-b border-white/10 bg-[#09100d]">
                <div className="absolute inset-5 rounded-[8px] border border-emerald-300/16 bg-[linear-gradient(135deg,rgba(54,217,130,0.16),rgba(255,255,255,0.04))]" />
                <div className="absolute left-9 right-9 top-10 h-3 rounded-full bg-emerald-200/70" />
                <div className="absolute left-9 top-16 h-2 w-2/3 rounded-full bg-white/18" />
                <div className="absolute bottom-8 left-9 right-9 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((itemIndex) => (
                    <div
                      key={itemIndex}
                      className="h-16 rounded-[8px] border border-white/10 bg-black/20"
                    />
                  ))}
                </div>
                <span className="absolute right-5 top-5 text-xs font-semibold text-white/34">
                  0{index + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/62">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal id="process" className="section-shell pt-28">
        <SectionIntro
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          text={t("process.text")}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6"
            >
              <span className="text-sm font-semibold text-emerald-200">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{item.text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-shell pt-28">
        <div className="grid gap-8 rounded-[8px] border border-emerald-300/18 bg-emerald-300/[0.07] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>{t("benefits.eyebrow")}</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-balance md:text-5xl">
              {t("benefits.title")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-white/10 bg-black/18 p-5"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section-shell pt-28">
        <div className="grid gap-5 lg:grid-cols-2">
          <SplitFeature
            id="seo"
            eyebrow={t("seo.eyebrow")}
            title={t("seo.title")}
            text={t("seo.text")}
            items={seo}
            icon={<Search aria-hidden size={30} />}
          />
          <SplitFeature
            id="nfc"
            eyebrow={t("nfc.eyebrow")}
            title={t("nfc.title")}
            text={t("nfc.text")}
            items={nfc}
            icon={<SmartphoneNfc aria-hidden size={30} />}
          />
        </div>
      </Reveal>

      <Reveal id="pricing" className="section-shell pt-28">
        <SectionIntro
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          text={t("pricing.text")}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.title} className="glass rounded-[8px] p-6">
              <p className="text-sm font-semibold text-emerald-200">{item.price}</p>
              <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/62">{item.text}</p>
              <ul className="mt-7 grid gap-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-white/70">
                    <Check aria-hidden className="mt-0.5 shrink-0 text-emerald-300" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-white/12 bg-white/[0.05] px-4 py-3 text-sm font-semibold transition hover:bg-white/[0.09]"
              >
                {t("pricing.cta")}
                <ArrowRight aria-hidden size={16} />
              </a>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal id="faq" className="section-shell pt-28">
        <SectionIntro eyebrow={t("faq.eyebrow")} title={t("faq.title")} text={t("faq.text")} />
        <div className="mt-10 grid gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[8px] border border-white/10 bg-white/[0.035] p-5 open:bg-white/[0.055]"
            >
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-[8px] text-base font-semibold">
                {item.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/12 text-emerald-200 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-white/62">{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal id="contact" className="section-shell py-28">
        <ContactForm />
      </Reveal>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col gap-4 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>
            {siteConfig.name} — {siteConfig.descriptor}
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="focus-ring hover:text-white" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a
              className="focus-ring inline-flex items-center gap-1 hover:text-white"
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <ExternalLink aria-hidden size={14} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-normal text-balance md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/64 md:text-lg">{text}</p>
    </div>
  );
}

function SplitFeature({
  id,
  eyebrow,
  title,
  text,
  items,
  icon
}: {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  items: CardItem[];
  icon: ReactNode;
}) {
  return (
    <article id={id} className="glass rounded-[8px] p-6 md:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-emerald-300/12 text-emerald-200">
        {icon}
      </div>
      <p className="mt-7 text-sm uppercase tracking-[0.18em] text-emerald-200">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-balance md:text-4xl">{title}</h2>
      <p className="mt-4 leading-7 text-white/64">{text}</p>
      <div className="mt-8 grid gap-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-[8px] border border-white/10 bg-black/18 p-4">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
