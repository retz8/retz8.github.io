import "./App.css";

import { AnimatePresence, motion } from "motion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Pages
import PortfolioPage from "@/pages/PortfolioPage";
import BlogPage from "@/pages/BlogPage";
import CookPage from "@/pages/CookPage";

// 여기에 들어가야하는 부분들

// 1. Routing
// 2. ThemeProvider
// 3. AnimatePresence for consistent animations between pages
// 4. margins and padding of side bar and main content

function App() {
  // return (
  //   <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
  //     <div
  //       className="max-w-screen-xl mx-auto px-10 md:px-20
  //     flex flex-col md:flex-row min-h-screen"
  //     >
  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={"portfolio"} // Ensures Framer Motion recognizes changes
  //           className="md:fixed md:top-0 w-full md:w-1/5 md:h-screen
  //             py-10 md:py-20 flex flex-row md:flex-col px-8 md:px-0 justify-between"
  //           initial={{ opacity: 0, x: -25 }} // Start invisible and slightly left
  //           animate={{ opacity: 1, x: 0 }} // Fade in and slide to position
  //           exit={{ opacity: 0, x: -25 }} // Fade out and slide to the left
  //           transition={{ duration: 0.5 }} // Smooth animation
  //         >
  //           <PortfolioSideBar />
  //         </motion.div>
  //       </AnimatePresence>

  //       <main
  //         className="w-full md:ml-[40%]
  //           md:w-3/5 overflow-y-auto px-8 md:px-10"
  //       >
  //         <AnimatePresence mode="wait">
  //           <motion.div
  //             key={"portfolio"} // Ensures a new animation for each tab
  //             initial={{ opacity: 0 }} // Start invisible
  //             animate={{ opacity: 1 }} // Fade in
  //             exit={{ opacity: 0 }} // Fade out
  //             transition={{ duration: 0.5 }} // Smooth fade
  //           >
  //             <PortfolioPage />
  //           </motion.div>
  //         </AnimatePresence>
  //       </main>
  //     </div>
  //   </ThemeProvider>
  // );

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cook" element={<CookPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
