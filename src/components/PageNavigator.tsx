import { Link } from "react-router-dom";
import { Newspaper, Utensils, Home } from "lucide-react";

const pageNavItems = [
  {
    label: "portfolio",
    icon: Home,
    to: "/",
  },
  {
    label: "blog",
    icon: Newspaper,
    to: "/blog",
  },
  {
    label: "cook",
    icon: Utensils,
    to: "/cook",
  },
];

interface PageNavigatorProps {
  selectedPage: string;
}

export default function PageNavigator({ selectedPage }: PageNavigatorProps) {
  return (
    <div
      className="w-fit h-fit mt-6
    flex flex-row justify-end gap-8"
    >
      {pageNavItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-row items-center gap-2 ${
            selectedPage === item.to
              ? "text-foreground font-semibold"
              : "text-muted-foreground"
          }`}
        >
          {/* <item.icon size={16} /> */}
          {item.label}
        </Link>
      ))}
    </div>
  );
}
