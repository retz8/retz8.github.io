// Cook page - 'cook' domain (/cook)

import PageLayout from "@/components/PageLayout";
import CookSideBar from "@/domains/cook/components/CookSideBar";

export default function CookPage() {
  return (
    <PageLayout selectedPage="/cook" sidebar={<CookSideBar />}>
      <div className="space-y-8 md:space-y-16 md:py-20 text-left">
        <p className="w-full">Work in progress...</p>
      </div>
    </PageLayout>
  );
}
