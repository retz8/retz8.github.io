import { Link } from "react-router-dom";

import type { Article } from "@/domains/blog/types/article";

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ArticleRow({ slug, title, date, summary }: Article) {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex flex-col gap-1 py-3 transition-colors"
    >
      <div className="flex flex-row items-baseline justify-between gap-4">
        <h3 className="text-foreground font-[500] group-hover:underline underline-offset-4">
          {title}
        </h3>
        <span className="shrink-0 text-sm text-muted-foreground">
          {formatDate(date)}
        </span>
      </div>
      <p className="text-sm text-muted-foreground group-hover:text-foreground">
        {summary}
      </p>
    </Link>
  );
}
