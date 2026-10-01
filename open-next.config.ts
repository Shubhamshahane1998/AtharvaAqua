import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Committed so CI does not generate one per build. The generated version also
 * rewrote package.json, next.config.ts and .gitignore inside the container,
 * which made each deploy depend on whatever the migration decided that run.
 *
 * `buildCommand` calls Next directly. By default the adapter runs the package
 * manager's own `build` script, which would recurse once `build` is the
 * adapter itself — and it has to be, because Cloudflare's configured build
 * command is `npm run build` and the deploy step needs `.open-next` to exist.
 */
const config = {
  ...defineCloudflareConfig(),
  buildCommand: "npx --no-install next build",
};

export default config;
