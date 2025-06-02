import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const step = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/steps" }),
  schema: z.object({
    id: z.string(),             // step0-setup
    tag: z.string(),            // git tag
    title: z.string(),
    summary: z.string(),
    durationMin: z.number(),    // minutos estimados
    files: z.array(z.string()),
    path: z.string(),           // ruta relativa para href
    author: z.string(),
    authorImageUrl: z.string(),
    pubDate: z.string()
  })
});

export const collections = { step };
