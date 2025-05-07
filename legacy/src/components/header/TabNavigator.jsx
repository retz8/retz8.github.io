import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
export default function TabNavigator({ tabs, activeTab, onTabChange }) {
  const { setTheme } = useTheme();

  const handleTabChange = (tabId) => {
    onTabChange(tabId);

    switch (tabId) {
      case "about":
        console.log("about");
        setTheme("dark");
        break;
      case "library":
        console.log("library");
        setTheme("yellow");
        break;
    }
  };

  return (
    <div className="flex flex-row gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={cn(
            "text-muted-foreground hover:text-foreground transition-all duration-150",
            activeTab === tab.id ? "text-primary" : ""
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
