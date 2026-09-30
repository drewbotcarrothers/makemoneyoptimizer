import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Shown as “Updated [date]: [note]” when updatedDate is also set. */
    updateNote: z.string().optional(),
    sources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string().url(),
          publisher: z.string(),
        }),
      )
      .default([]),
    category: z.enum(['side-hustle', 'guide']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    sample: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
