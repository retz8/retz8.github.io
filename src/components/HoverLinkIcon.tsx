import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverLinkIconProps {
  url: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * HoverLinkIcon is a component that displays a link icon and a hover card when the icon is hovered over.
 * @param url - The URL of the link.
 * @param description - The description of the link.
 * @param icon - The icon to display.
 * @returns A React component that displays a link icon and a hover card when the icon is hovered over.
 *
 * If description is empty, it is not hoverable.
 */
export default function HoverLinkIcon({
  url,
  description,
  icon,
}: HoverLinkIconProps) {
  const isHoverable = description !== "";

  if (!isHoverable) {
    return (
      <a href={url} target="_blank" className="hover:text-muted-foreground">
        {icon}
      </a>
    );
  }

  return (
    <a
      key={url}
      href={url}
      target="_blank"
      className="hover:text-muted-foreground"
    >
      <HoverCard>
        <HoverCardTrigger>{icon}</HoverCardTrigger>
        <HoverCardContent className="w-fit py-1 px-3 text-sm">
          <span>{description}</span>
        </HoverCardContent>
      </HoverCard>
    </a>
  );
}
