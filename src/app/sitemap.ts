import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dinnar.us";
  const locales = ["", "/zh"];

  const pages = [
    { path: "", priority: 1, changeFreq: "weekly" as const },
    { path: "/about", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/products", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/technology", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/industries", priority: 0.9, changeFreq: "weekly" as const },
  ];

  const products = [
    "p-1098", "p-1072", "p-511", "p-527", "p-589", "p-602",
    "p-631", "p-644", "p-657", "p-671", "p-741", "p-754",
    "p-778", "p-790", "p-803", "p-843", "p-844", "p-870",
    "p-909", "p-933", "p-953", "p-965",
  ];

  const industries = ["electron", "energy", "semiconductor", "display", "other"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = locale;
    for (const page of pages) {
      entries.push({
        url: `${base}${prefix}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFreq,
        priority: page.priority,
      });
    }
    for (const slug of products) {
      entries.push({
        url: `${base}${prefix}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
    for (const slug of industries) {
      entries.push({
        url: `${base}${prefix}/industries/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  return entries;
}
