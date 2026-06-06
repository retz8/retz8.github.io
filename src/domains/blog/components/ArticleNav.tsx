import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Article } from "@/domains/blog/types/article";

// Prev = newer article, next = older — following the date order of the list.
export default function ArticleNav({
  prev,
  next,
}: {
  prev?: Article;
  next?: Article;
}) {
  if (!prev && !next) return null;

  return (
    <nav className="flex flex-row justify-between gap-4 border-t border-border pt-6 text-sm">
      {prev ? (
        <Link
          to={`/blog/${prev.slug}`}
          className="group flex flex-col gap-1 max-w-[45%] text-left"
        >
          <span className="flex items-center gap-1 text-muted-foreground">
            <ArrowLeft size={14} /> Newer
          </span>
          <span className="text-foreground group-hover:underline underline-offset-4">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          to={`/blog/${next.slug}`}
          className="group flex flex-col gap-1 max-w-[45%] text-right ml-auto"
        >
          <span className="flex items-center justify-end gap-1 text-muted-foreground">
            Older <ArrowRight size={14} />
          </span>
          <span className="text-foreground group-hover:underline underline-offset-4">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
