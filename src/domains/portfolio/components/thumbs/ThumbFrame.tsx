import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ThumbFrameProps {
  // "dark" thumbs take a darker hairline; "light" ones a white ground.
  tone?: "dark" | "light";
  style?: CSSProperties;
  children: ReactNode;
}

// The box every project diagram sits in: a fixed-height strip with a
// hairline, dimmed a little while its card is hovered. The diagrams were
// drawn with the browser's default content-box sizing, so it is restored
// inside the frame (elements that need border-box set it inline).
export default function ThumbFrame({ tone, style, children }: ThumbFrameProps) {
  return (
    <div
      className={cn(
        "box-border h-[150px] [&_*]:box-content overflow-hidden outline-1 -outline-offset-1 outline-[#e7e5e4] transition-[opacity,transform] duration-150 group-hover:opacity-[.88] max-sm:h-[120px]",
        tone === "dark" && "outline-[#292524]",
        tone === "light" && "bg-white"
      )}
      style={style}
    >
      {children}
    </div>
  );
}
