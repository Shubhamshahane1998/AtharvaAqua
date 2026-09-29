import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project site from /<repo>, so every asset and link
 * needs that prefix. Both values come from the environment rather than being
 * hard-coded, so moving to a custom domain later means changing the workflow,
 * not this file.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
