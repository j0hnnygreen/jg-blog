import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";
import BLOGS from "../models/blogs.model";
import TOOLS from "../models/resources.model";

// Static routes (always present) plus every in-house blog post and resource
// listed in the models. External links are skipped — only local routes belong
// in the sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/resources"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const inHouseEntries = [...BLOGS, ...TOOLS]
    .filter((entry) => entry.url.startsWith("/"))
    // Deduplicate (some resources point at collection pages that may overlap).
    .filter(
      (entry, index, entries) =>
        entries.findIndex((other) => other.url === entry.url) === index,
    )
    .map((entry) => ({
      url: `${siteUrl}${entry.url}`,
      changeFrequency: "monthly" as const,
      priority: entry.url.startsWith("/blogs") ? 0.7 : 0.6,
    }));

  return [...staticRoutes, ...inHouseEntries];
}
