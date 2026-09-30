import type { NextConfig } from "next";

/**
 * basePath is only needed when the site is served from a subdirectory (a
 * GitHub Pages project site). It comes from the environment so the Cloudflare
 * deployment, which serves from the root, needs no code change.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath,
  images: {
    // No image optimizer runs on the current host, so sources are already
    // sized and converted to WebP at build time in public/images.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Content-hashed and fingerprint-free, but these files only change
        // when the repo does — the deploy is what invalidates them.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
