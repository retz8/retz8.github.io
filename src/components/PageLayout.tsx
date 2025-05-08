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
        <motion.div
          key="sidebar"
          className="md:fixed md:top-0 w-full md:w-1/5 md:h-screen py-10 md:py-20 flex flex-row md:flex-col px-8 md:px-0 justify-between"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.5 }}
        >
          {sidebar}
        </motion.div>
      </AnimatePresence>
      <main className="w-full md:ml-[40%] md:w-3/5 overflow-y-auto px-8 md:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
