import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import ArticleToc, { type TocItem } from "@/domains/blog/components/ArticleToc";

export default function ArticleSideBar({ toc }: { toc: TocItem[] }) {
  return (
    <div className="flex flex-col gap-10 h-full">
      <Link
        to="/blog"
        className="flex flex-row items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit"
      >
        <ArrowLeft size={16} />
        Writing
      </Link>
      <ArticleToc items={toc} />
    </div>
  );
}
