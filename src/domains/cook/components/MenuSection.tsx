import Divider from "@/components/ui/divider";
import type { MenuDataItem, MenuDetailItem } from "@/domains/cook/types/menu";
import MenuDetailList from "./MenuDetailList";

export default function MenuSection({
  menuDataItem,
}: {
  menuDataItem: MenuDataItem;
}) {
  function getFoodImage(foodId: string): string {
    // 2025-05-04-octopus-ceviche
    // folder name: 2025-05-04
    // file name: octopus-ceviche.webp

    const date = foodId.split("-").slice(0, 3).join("-");
    const foodName = foodId.split("-").slice(3).join("-");

    return `/foods/${date}/${foodName}.webp`;
  }

  function convertMenuDataItemToDetail(
    menuDataItem: MenuDataItem
  ): MenuDetailItem[] {
    return menuDataItem.menu.map((item) => ({
      id: item.id,
      korName: item.korName,
      engName: item.engName,
      description: item.description,
      image: getFoodImage(item.id),
    }));
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{menuDataItem.date}</h2>
      <Divider className="-mt-1" />
      <div className="text-foreground mt-2 text-sm flex flex-col gap-2">
        {menuDataItem.description}
      </div>
      <MenuDetailList detailItems={convertMenuDataItemToDetail(menuDataItem)} />
    </div>
  );
}
