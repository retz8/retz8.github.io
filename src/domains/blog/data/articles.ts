import type { ComponentType } from "react";

import type { Article, ArticleFrontmatter } from "@/domains/blog/types/article";

type ArticleModule = {
  default: ComponentType;
  frontmatter: ArticleFrontmatter;
};

// Auto-discover every article in the content folder. Drop in an .mdx file and it appears.
const modules = import.meta.glob<ArticleModule>(
  "@/domains/blog/content/*.mdx",
  { eager: true }
);

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.mdx$/, "");
}

// All articles, ordered newest-first (chronological by default).
const articles: Article[] = Object.entries(modules)
  .map(([path, mod]) => ({
    ...mod.frontmatter,
    slug: slugFromPath(path),
    Body: mod.default,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

// Neighbors in reading order: `prev` is newer, `next` is older. Ends return undefined.
export function getArticleNeighbors(slug: string): {
  prev?: Article;
  next?: Article;
} {
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}
