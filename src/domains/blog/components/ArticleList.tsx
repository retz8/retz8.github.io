import { getAllArticles } from "@/domains/blog/data/articles";
import ArticleRow from "@/domains/blog/components/ArticleRow";

export default function ArticleList() {
  const articles = getAllArticles();

  if (articles.length === 0) {
    return (
      <p className="text-muted-foreground">
        No writing yet — check back soon.
      </p>
    );
  }

  return (
    <ul className="flex flex-col divide-y divide-border">
      {articles.map((article) => (
        <li key={article.slug}>
          <ArticleRow {...article} />
        </li>
      ))}
    </ul>
  );
}
