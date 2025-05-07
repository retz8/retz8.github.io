"use client";

import React, { useState } from "react";
import Link from "next/link";
import TabNavigator from "@/components/header/TabNavigator";
import AboutSideBar from "@/components/about/AboutSideBar";
import LibrarySideBar from "@/components/library/LibrarySideBar";
import SocialLinks from "@/components/SocialLinks";

import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "about", label: "About" },
  { id: "library", label: "Library" },
];

export default function Template({ children }) {
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const renderSideBar = () => {
    switch (activeTab) {
      case "about":
        return <AboutSideBar />;
      case "library":
        return <LibrarySideBar />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen transition-all duration-300">
      {/* Header */}
      <header className="fixed top-0 z-50 bg-background/80 backdrop-blur-sm">
        <TabNavigator
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </header>

      <div className="flex flex-col md:flex-row min-h-screen ">
        {/* Left Navigation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Ensures Framer Motion recognizes changes
            className="md:fixed md:top-0 w-full md:w-1/3 md:h-screen 
              py-10 md:py-20 flex flex-row md:flex-col px-8 md:px-0 justify-between"
            initial={{ opacity: 0, x: -25 }} // Start invisible and slightly left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
            exit={{ opacity: 0, x: -25 }} // Fade out and slide to the left
            transition={{ duration: 0.5 }} // Smooth animation
          >
            <div className="flex flex-col gap-16">{renderSideBar()}</div>

            <div className="flex flex-col gap-4">
              <SocialLinks />
              <span className="hidden md:block text-xs text-muted-foreground/50">
                Inspired by{" "}
                <Link
                  href="https://brittanychiang.com/"
                  target="_blank"
                  className="hover:text-muted-foreground"
                >
                  Brittany Chiang
                </Link>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Main Content */}
        <main
          className="w-full md:ml-[40%]
            md:w-3/5 overflow-y-auto px-8 md:px-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Ensures a new animation for each tab
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: 1 }} // Fade in
              exit={{ opacity: 0 }} // Fade out
              transition={{ duration: 0.5 }} // Smooth fade
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
