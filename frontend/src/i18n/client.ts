"use client";

import {
  initReactI18next,
  useTranslation as useTranslationHook,
} from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

import { cookieName, getOptions } from "./options";

const getCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;

  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return undefined;
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: typeof window !== "undefined" ? getCookie(cookieName) : undefined,
    detection: {
      order: ["htmlTag", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
      excludeCacheFor: [],
    },
  });

export const useTranslation: typeof useTranslationHook = (ns, options) =>
  useTranslationHook(ns, options);
