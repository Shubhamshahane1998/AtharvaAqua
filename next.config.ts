import type { NextConfig } from "next";

/**
 * Two deploy targets want different builds.
 *
 * Cloudflare Workers runs the app, so the default is `standalone`. The GitHub
 * Pages job sets NEXT_OUTPUT=export to get a static `out/` directory instead.
 */
const isStaticExport = process.env.NEXT_OUTPUT === "export";

/**
 * Only needed when the site is served from a subdirectory, as a GitHub Pages
 * project site is. Cloudflare serves from the root and leaves this unset.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  basePath,
  images: {
    // No image optimizer runs on either host, so sources are already sized and
    // converted to WebP at build time in public/images.
    unoptimized: true,
  },
  // A static export is just files: there is no server to attach headers, and
  // declaring them fails the export build. The host supplies them there.
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/images/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, stale-while-revalidate=86400",
                },
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
      }),
};

export default nextConfig;
