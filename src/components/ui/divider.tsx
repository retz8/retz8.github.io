import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
  return <div className={cn("w-full h-[1px] bg-border", className)} />;
}
