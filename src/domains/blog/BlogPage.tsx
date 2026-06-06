// Blog page - 'blog' domain (/blog)

import PageLayout from "@/components/PageLayout";
import BlogSideBar from "@/domains/blog/components/BlogSideBar";
import ArticleList from "@/domains/blog/components/ArticleList";

export default function BlogPage() {
  return (
    <PageLayout selectedPage="/blog" sidebar={<BlogSideBar />}>
      <div className="w-full space-y-8 md:py-20 text-left">
        <ArticleList />
      </div>
    </PageLayout>
  );
}
