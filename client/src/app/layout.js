import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Jioh In",
  description: "Jioh In, Software Engineer, Writer, and Chef",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <body
        className="relative min-h-screen bg-background
      "
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={["dark", "yellow", "light"]}
        >
          <div className="max-w-screen-xl mx-auto ">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

// bg-gradient-to-b from-[#0a1729] via-[#0c1b31] to-[#080f1d]
