import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Committed so CI does not generate one per build. The generated version also
 * rewrote package.json, next.config.ts and .gitignore inside the container,
 * which made each deploy depend on whatever the migration decided that run.
 */
export default defineCloudflareConfig();
