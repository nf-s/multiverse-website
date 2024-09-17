import { withSentryConfig } from "@sentry/nextjs";
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
    UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
    contactEnabled: true,
  },
};

if (!process.env.UMAMI_WEBSITE_ID) {
  throw new Error("UMAMI_WEBSITE_ID must be set");
}

const withMDX = createMDX({
  extension: /\.mdx?$/,

  options: { rehypePlugins: [rehypeSlug] },
});

export default withSentryConfig(withMDX(nextConfig), {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: "n-forbes-smith",
  project: "technobrats-multiverse",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
