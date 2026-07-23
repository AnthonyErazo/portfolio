import type { MetadataRoute } from "next";
import { indexableProjects, projectPath } from "@/lib/projects";
import { absoluteUrl, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = indexableProjects.map((project) => ({
    url: absoluteUrl(projectPath(project)),
    changeFrequency: "monthly",
    priority: project.type === "professional" ? 0.8 : 0.7,
    images: project.images?.map((image) => absoluteUrl(image.src)),
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/proyectos"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectEntries,
  ];
}
