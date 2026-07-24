import { setRequestLocale } from "next-intl/server";

import { HomePage } from "@/components/home-page";
import type { Locale } from "@/config/site";

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <HomePage />;
}
