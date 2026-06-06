// Article detail page - 'blog' domain (/blog/:slug)

import type { ComponentType } from "react";
import { Navigate, useParams } from "react-router-dom";

import PageLayout from "@/components/PageLayout";
import BlogSideBar from "@/domains/blog/components/BlogSideBar";

type ArticleFrontmatter = {
  title: string;
  date: string;
  summary: string;
  order?: number;
};

type ArticleModule = {
  default: ComponentType;
  frontmatter: ArticleFrontmatter;
};

// Eagerly discover every article. Keyed by file path; slug is the filename.
const modules = import.meta.glob<ArticleModule>(
  "@/domains/blog/content/*.mdx",
  { eager: true }
);

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.mdx$/, "");
}

const bySlug = new Map<string, ArticleModule>(
  Object.entries(modules).map(([path, mod]) => [slugFromPath(path), mod])
);

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? bySlug.get(slug) : undefined;

  // Unknown slug: send the reader back to the list.
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const { default: Body, frontmatter } = article;

  return (
    <PageLayout selectedPage="/blog" sidebar={<BlogSideBar />}>
      <article className="space-y-8 md:py-20 text-left w-full">
        <header className="space-y-2">
          <h1 className="text-2xl font-[500]">{frontmatter.title}</h1>
          <p className="text-muted-foreground text-sm">{frontmatter.date}</p>
        </header>
        <Body />
      </article>
    </PageLayout>
  );
}
