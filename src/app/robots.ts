import type { MetadataRoute } from "next";
import { abs, site } from "@/lib/site";

// `output: export` requires metadata routes to be explicitly static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: abs("/sitemap.xml"),
    host: site.url,
  };
}
