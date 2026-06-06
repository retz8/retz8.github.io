export type TocItem = {
  id: string;
  text: string;
  level: number; // 2 = h2, 3 = h3
};

// Scroll to a heading by id without touching the URL hash (HashRouter owns it).
function scrollToHeading(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ArticleToc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    // Desktop-only: on mobile the sidebar stacks above the prose, so we omit the TOC.
    <nav className="hidden md:block text-sm" aria-label="Table of contents">
      <ul className="flex flex-col gap-2 border-l border-border">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-7" : "pl-4"}>
            <button
              type="button"
              onClick={() => scrollToHeading(item.id)}
              className="text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
