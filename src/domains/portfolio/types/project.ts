// A project shown as a card: a diagram thumb over its title and one line.
// The thumb is looked up by `id` in components/thumbs.
export type ProjectCard = {
  id: string;
  title: string;
  url: string;
  description: string;
};

// A project shown as a single row, without a thumb.
export type ProjectRow = {
  title: string;
  // Rows without a url render as plain text.
  url?: string;
  description: string;
};

// A group of projects under one heading.
export type ProjectGroup = {
  id: string;
  title: string;
  description?: string;
  period?: {
    start: string;
    end: string;
  };
  cards: ProjectCard[];
  more?: {
    label: string;
    url: string;
  };
  rows?: ProjectRow[];
};
