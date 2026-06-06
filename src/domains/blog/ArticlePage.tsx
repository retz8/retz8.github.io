// Article detail page - 'blog' domain (/blog/:slug)

import { Navigate, useParams } from "react-router-dom";

import PageLayout from "@/components/PageLayout";
import BlogSideBar from "@/domains/blog/components/BlogSideBar";
import { getArticleBySlug } from "@/domains/blog/data/articles";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  // Unknown slug: send the reader back to the list.
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const { Body, title, date } = article;

  return (
    <PageLayout selectedPage="/blog" sidebar={<BlogSideBar />}>
      <article className="space-y-8 md:py-20 text-left w-full">
        <header className="space-y-2">
          <h1 className="text-2xl font-[500]">{title}</h1>
          <p className="text-muted-foreground text-sm">{date}</p>
        </header>
        <Body />
      </article>
    </PageLayout>
  );
}
