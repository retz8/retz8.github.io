import type { Localized, LocalizedText } from "@/lib/locale";

// A project shown as a card: a diagram thumb over its title and one line.
// The thumb is looked up by `id` in components/thumbs.
export type ProjectCard = {
  id: string;
  title: string;
  url: string;
  description: Localized;
};

// A project shown as a single row, without a thumb.
export type ProjectRow = {
  title: string;
  // Rows without a url render as plain text.
  url?: string;
  description: Localized;
};

// A group of projects under one heading.
export type ProjectGroup = {
  id: string;
  title: LocalizedText;
  description?: Localized;
  period?: {
    start: string;
    // Left out while the work is ongoing; shown as "now".
    end?: string;
  };
  cards: ProjectCard[];
  more?: {
    label: Localized;
    url: string;
  };
  rows?: ProjectRow[];
};
