import type { MetadataRoute } from "next";
import { getPages } from "./source";

export default function sitemap(): MetadataRoute.Sitemap {
  const map: MetadataRoute.Sitemap = [
    {
      url: "https://aaronclaes.be",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
  const pages = getPages();

  pages.forEach((page) => {
    map.push({
      url: `https://aaronclaes.be${page.url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  return map;
}
