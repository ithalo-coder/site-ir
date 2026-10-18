import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/cadastro`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/links`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
