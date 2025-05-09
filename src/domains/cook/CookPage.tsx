// Cook page - 'cook' domain (/cook)

import PageLayout from "@/components/PageLayout";
import CookSideBar from "@/domains/cook/components/CookSideBar";
import AboutCook from "@/domains/cook/components/AboutCook";
import MenuSection from "@/domains/cook/components/MenuSection";
import { menuData } from "@/domains/cook/data/menuData";
import type { MenuDataItem } from "@/domains/cook/types/menu";

export default function CookPage() {
  function addDataIdToMenuDataItemId(menuDataItem: MenuDataItem): MenuDataItem {
    // concat id of menuData into each menu's id to have unique keys
    // ex) 2025-05-04-octopus-ceviche
    return {
      ...menuDataItem,
      menu: menuDataItem.menu.map((menu) => ({
        ...menu,
        id: `${menuDataItem.id}-${menu.id}`,
      })),
    };
  }

  return (
    <PageLayout selectedPage="/cook" sidebar={<CookSideBar />}>
      <div className="space-y-8 md:space-y-16 md:py-20 text-left">
        <section id="about">
          <AboutCook />
        </section>
        {menuData.map((menuDataItem) => (
          <section id={menuDataItem.id}>
            <MenuSection
              menuDataItem={addDataIdToMenuDataItemId(menuDataItem)}
            />
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
