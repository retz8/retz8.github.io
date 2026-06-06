import { Link, useLocation } from "react-router-dom";

import NameCard from "@/components/NameCard";
import { getAllArticles } from "@/domains/blog/data/articles";

import { cn } from "@/lib/utils";

export default function BlogSideBar() {
  const { pathname } = useLocation();
  const articles = getAllArticles();

  return (
    <div className="flex flex-col h-full gap-10">
      <NameCard
        header="Jioh In"
        subHeader="Thoughts & Articles"
        description="The thinking behind the work"
      />

      <nav className="hidden md:flex flex-col space-y-6">
        {articles.map(({ slug, title }) => {
          const isActive = pathname === `/blog/${slug}`;
          return (
            <Link
              key={`blog-sidebar-${slug}`}
              to={`/blog/${slug}`}
              className={cn(
                "group relative text-left text-sm font-medium transition-all duration-150",
                isActive
                  ? "text-primary pl-12"
                  : "text-muted-foreground hover:text-foreground pl-8"
              )}
            >
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-current transition-all duration-150",
                  isActive ? "w-8" : "w-4 group-hover:w-8"
                )}
              />
              <span
                className={cn(
                  "inline-block transition-all duration-150",
                  isActive ? "translate-x-0" : "translate-x-0 group-hover:translate-x-4"
                )}
              >
                {title}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
