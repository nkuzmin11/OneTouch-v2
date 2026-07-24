import type { MetadataRoute } from "next";

import { locales, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => {
    const path = locale === "pl" ? "" : `/${locale}`;

    return {
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: locale === "pl" ? 1 : 0.9,
      alternates: {
        languages: {
          pl: `${siteConfig.url}`,
          uk: `${siteConfig.url}/uk`,
          en: `${siteConfig.url}/en`
        }
      }
    };
  });
}
