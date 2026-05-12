import type { MetadataRoute } from "next";
import { industrySlugs, solutionSlugs, utilitySlugs } from "@/content/site-map";

const base = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/work",
    "/insights",
    "/about",
    "/contact",
    "/book-strategy-call",
    "/request-proposal",
    "/get-an-audit",
    "/start-a-project",
  ];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}` })),
    ...solutionSlugs.map((slug) => ({ url: `${base}/solutions/${slug}` })),
    ...industrySlugs.map((slug) => ({ url: `${base}/industries/${slug}` })),
    ...utilitySlugs.map((slug) => ({ url: `${base}/${slug}` })),
  ];
}
