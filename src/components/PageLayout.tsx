// Layout for all pages
// : placements for left side bar and main content

import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface PageLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function PageLayout({ sidebar, children }: PageLayoutProps) {
  return (
    <div className="max-w-screen-xl mx-auto px-10 md:px-20 flex flex-col md:flex-row min-h-screen">
      <AnimatePresence mode="wait">
        <motion.aside
          className="md:fixed md:top-0 w-full md:w-1/5 md:h-screen py-10 md:py-20 flex flex-row md:flex-col px-8 md:px-0 justify-between"
          initial={{ opacity: 0, x: -25 }} // Start invisible and slightly left
          animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
          exit={{ opacity: 0, x: -25 }} // Fade out and slide to the left
          transition={{ duration: 0.5 }} // Smooth animation
        >
          {sidebar}
        </motion.aside>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          exit={{ opacity: 0 }} // Fade out
          transition={{ duration: 0.5 }} // Smooth fade
          className="w-full md:ml-[40%] md:w-3/5 overflow-y-auto px-8 md:px-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
