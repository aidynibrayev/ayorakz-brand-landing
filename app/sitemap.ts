import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    ...products.map((p) => ({
      url: `${site.url}/p/${p.slug}/`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
