// Blog page - 'blog' domain (/blog)

import PageLayout from "@/components/PageLayout";
import BlogSideBar from "@/domains/blog/components/BlogSideBar";

export default function BlogPage() {
  return (
    <PageLayout selectedPage="/blog" sidebar={<BlogSideBar />}>
      <div className="space-y-8 md:space-y-16 md:py-20 text-left">
        <p className="w-full">Work in progress...</p>
      </div>
    </PageLayout>
  );
}
