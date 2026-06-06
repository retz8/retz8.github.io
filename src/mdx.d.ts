declare module "*.mdx" {
  import type { ComponentType } from "react";

  // Shape exposed by remark-mdx-frontmatter from each article's YAML frontmatter.
  export const frontmatter: {
    title: string;
    date: string;
    summary: string;
    order?: number;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
