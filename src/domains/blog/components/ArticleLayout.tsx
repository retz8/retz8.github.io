// Dedicated layout for the article detail page.
// Unlike PageLayout (even sidebar/content split), this keeps a narrow sidebar
// (back link + TOC) and gives the reading column the bulk of the width.

import React from "react";
import { AnimatePresence, motion } from "motion/react";
import PageNavigator from "@/components/PageNavigator";

interface ArticleLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function ArticleLayout({ sidebar, children }: ArticleLayoutProps) {
  return (
    <div
      className="relative max-w-screen-xl mx-auto md:px-24
    flex flex-col min-h-screen pb-8 w-screen"
    >
      <div
        className="fixed max-w-screen-xl mx-auto w-full
       bg-background z-10 h-12 md:h-20 pr-8 md:pr-[232px]
       flex flex-row justify-end"
      >
        <PageNavigator selectedPage="/blog" />
      </div>
      <div className="flex flex-col md:flex-row">
        <AnimatePresence mode="wait">
          <motion.aside
            className="md:fixed md:top-0 w-full md:w-[15%] md:h-screen
          py-10 md:py-20 mt-10 md:mt-0
          flex flex-col px-8 md:px-0"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.5 }}
          >
            {sidebar}
          </motion.aside>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:ml-[20%] md:w-[80%]
            overflow-y-auto px-8 md:px-10 flex flex-col items-start"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
