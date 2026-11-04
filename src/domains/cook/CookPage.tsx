// Cook page - 'cook' domain (/cook)

import SiteLayout from "@/components/SiteLayout";
import CookIntro from "@/domains/cook/components/CookIntro";
import DinnerSection from "@/domains/cook/components/DinnerSection";
import { dinners } from "@/domains/cook/data/menuData";

export default function CookPage() {
  return (
    <SiteLayout intro={<CookIntro />}>
      <div className="flex flex-col gap-24">
        {dinners.map((dinner) => (
          <DinnerSection key={dinner.id} {...dinner} />
        ))}
      </div>
    </SiteLayout>
  );
}
