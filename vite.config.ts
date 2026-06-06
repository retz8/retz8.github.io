import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        // Expose YAML frontmatter as a named `frontmatter` export on each .mdx module.
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        // Build-time syntax highlighting with dual light/dark themes (CSS switches them).
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: { light: "github-light", dark: "github-dark" },
              keepBackground: false,
            },
          ],
        ],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
