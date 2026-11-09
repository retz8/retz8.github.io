import { createContext, useContext } from "react";

// The site's two languages. English lives at the root (/, /cook); Korean
// under /ko (/ko, /ko/cook).
export type Locale = "en" | "ko";

// Text written once per language.
export type Localized<T = string> = Record<Locale, T>;

// Text that is the same in both languages (a name, a URL label) can stay a
// plain string; text that differs is written per language.
export type LocalizedText = string | Localized;

export function localize(text: LocalizedText, locale: Locale): string {
  return typeof text === "string" ? text : text[locale];
}

// The locale of the page being rendered, set by its route in App.tsx.
export const LocaleContext = createContext<Locale>("en");

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

// A page's path in the given locale: "/cook" → "/ko/cook".
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path;
  return path === "/" ? "/ko" : `/ko${path}`;
}

// The same page in the given locale: "/ko/cook" → "/cook" for English.
export function switchLocalePath(pathname: string, to: Locale): string {
  const base = pathname.replace(/^\/ko(?=\/|$)/, "") || "/";
  return localePath(to, base);
}

