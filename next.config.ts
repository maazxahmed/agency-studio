import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // In dev, same URL + the image optimizer cache under `.next/cache/images` can keep an old
    // `public/` file after you overwrite it. TTL 0 makes refreshes pick up replacements sooner.
    // For `public/` assets that keep the same filename, prefer `unoptimized` on the Image and/or
    // a `?v=` query via `NEXT_PUBLIC_*_REVISION` (see hero, marketing, and business impact in HomeSections).
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 60 * 60 * 24,
  },
};

export default nextConfig;
