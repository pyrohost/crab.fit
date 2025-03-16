import { Metadata } from "next";
import { Karla } from "next/font/google";

import Settings from "/src/components/Settings/Settings";
import TranslateDialog from "/src/components/TranslateDialog/TranslateDialog";
import { fallbackLng } from "/src/i18n/options";
import { useTranslation } from "/src/i18n/server";

import "./global.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://crab.fit"),
  title: {
    absolute: "Crab Fit",
    template: "%s - Crab Fit",
  },
  keywords: [
    "crab",
    "fit",
    "crabfit",
    "schedule",
    "availability",
    "availabilities",
    "when2meet",
    "doodle",
    "meet",
    "plan",
    "time",
    "timezone",
  ],
  description:
    "Enter your availability to find a time that works for everyone!",
  manifest: "manifest.json",
  openGraph: {
    title: "Crab Fit",
    description:
      "Enter your availability to find a time that works for everyone!",
    url: "/",
  },
  icons: {
    icon: "favicon.ico",
    apple: "logo192.png",
  },
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { resolvedLanguage } = await useTranslation([]);

  return (
    <html lang={resolvedLanguage ?? fallbackLng}>
      <body className={karla.className}>
        <Settings />
        <TranslateDialog />

        {children}
      </body>
    </html>
  );
};

export default RootLayout;
