import { Link } from "react-router-dom";
import { Utensils, Home } from "lucide-react";

const pageNavItems = [
  {
    label: "PORTFOLIO",
    icon: Home,
    to: "/",
  },
  // {
  //   label: "BLOG",
  //   icon: Newspaper,
  //   to: "/blog",
  // },
  {
    label: "COOK",
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
      className="w-fit h-fit mt-3 md:mt-6
    flex flex-row justify-end gap-8"
    >
      {pageNavItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-row items-center gap-2 ${
            selectedPage === item.to
              ? "text-foreground font-[500]"
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
