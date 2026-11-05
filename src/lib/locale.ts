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

const STORAGE_KEY = "locale";

// The language a reader picked with the header's language link. Storage
// can be missing or blocked (private windows), so every access is guarded.
function readStoredLocale(): Locale | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "en" || value === "ko" ? value : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Without storage the choice lasts for this page only.
  }
}

// Korean when the browser's first preferred language is Korean, English
// otherwise. The browser's language says what the reader reads; the time
// zone would only say where they are.
function browserLocale(): Locale {
  const first = navigator.languages?.[0] ?? navigator.language ?? "";
  return first.toLowerCase().startsWith("ko") ? "ko" : "en";
}

// Sends a reader who opens the home page to the Korean home page when that
// is their language. It runs once, before the app renders, so nothing
// flashes: a shared link to a specific page (/cook, /ko) is shown as it is,
// and a language picked with the header's link wins over the browser's.
// It replaces the history entry, so Back does not bounce through it.
export function redirectToPreferredLocale(): void {
  const path = window.location.hash.replace(/^#/, "") || "/";
  if (path !== "/") return;
  const locale = readStoredLocale() ?? browserLocale();
  if (locale === "ko") {
    window.history.replaceState(window.history.state, "", "#/ko");
  }
}
