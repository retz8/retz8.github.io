import type { MenuDetailItem } from "@/domains/cook/types/menu";

export default function MenuDetailList({
  detailItems,
}: {
  detailItems: MenuDetailItem[];
}) {
  return (
    <div className="flex flex-col gap-6 py-4">
      {detailItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-start 
          gap-4 text-foreground group"
        >
          <img
            src={item.image}
            alt={item.korName}
            className="w-full md:w-2/5 aspect-square"
          />
          <div className="flex flex-col">
            <span className="group-hover:font-[500]">{item.engName}</span>
            <span className="text-sm ">{item.korName}</span>
            <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
