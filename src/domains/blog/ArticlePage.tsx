// Article detail page - 'blog' domain (/blog/:slug)

import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import PageLayout from "@/components/PageLayout";
import ArticleSideBar from "@/domains/blog/components/ArticleSideBar";
import ArticleNav from "@/domains/blog/components/ArticleNav";
import type { TocItem } from "@/domains/blog/components/ArticleToc";
import {
  getArticleBySlug,
  getArticleNeighbors,
} from "@/domains/blog/data/articles";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  const bodyRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<TocItem[]>([]);

  // After the body renders, read its headings (ids added by rehype-slug) into a TOC.
  useEffect(() => {
    if (!bodyRef.current) return;
    const headings = bodyRef.current.querySelectorAll<HTMLElement>("h2, h3");
    setToc(
      Array.from(headings).map((el) => ({
        id: el.id,
        text: el.textContent ?? "",
        level: el.tagName === "H3" ? 3 : 2,
      }))
    );
  }, [slug]);

  // Unknown slug: send the reader back to the list.
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const { Body, title, date } = article;
  const { prev, next } = getArticleNeighbors(article.slug);

  return (
    <PageLayout selectedPage="/blog" sidebar={<ArticleSideBar toc={toc} />}>
      <article className="space-y-8 md:py-20 text-left w-full">
        <header className="space-y-2">
          <h1 className="text-2xl font-[500]">{title}</h1>
          <p className="text-muted-foreground text-sm">{date}</p>
        </header>
        <div ref={bodyRef} className="prose max-w-none">
          <Body />
        </div>
        <ArticleNav prev={prev} next={next} />
      </article>
    </PageLayout>
  );
}
