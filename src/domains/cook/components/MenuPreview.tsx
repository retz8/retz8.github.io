import type { MenuPreviewItem } from "@/domains/cook/types/menu";

export default function MenuPreview({
  previewItems,
}: {
  previewItems: MenuPreviewItem[];
}) {
  return (
    <div className="flex flex-col gap-4 py-2">
      {previewItems.map((item) => (
        <div key={item.id} className="flex flex-col items-start justify-center">
          <span>{item.engName}</span>
          <span>{item.korName}</span>
        </div>
      ))}
    </div>
  );
}
