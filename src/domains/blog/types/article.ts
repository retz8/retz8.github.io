import type { ComponentType } from "react";

// Metadata sourced from each article's YAML frontmatter.
export type ArticleFrontmatter = {
  title: string;
  date: string; // ISO date string, e.g. "2026-06-06"
  summary: string;
  order?: number; // reserved: optional manual ordering override
};

// A discovered article: its frontmatter, filename-derived slug, and rendered body.
export type Article = ArticleFrontmatter & {
  slug: string;
  Body: ComponentType;
};
