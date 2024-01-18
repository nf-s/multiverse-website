import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  publicRuntimeConfig: {
    contactEnabled: false,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,

  options: { rehypePlugins: [rehypeSlug] },
});
export default withMDX(nextConfig);
