import type { LocalizedText } from "@/lib/locale";

// One row of the Experience list. Text that differs by language is
// written per language; names that don't stay plain strings.
export type Experience = {
  id: string;
  organization: LocalizedText;
  role: LocalizedText;
  // The work itself, shown after the role.
  link?: {
    label: LocalizedText;
    url: string;
  };
  period: string;
};
