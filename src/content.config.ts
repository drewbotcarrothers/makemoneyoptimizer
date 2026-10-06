import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS } from './lib/categories';

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
    category: z.enum(CATEGORY_SLUGS),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    sample: z.boolean().default(true),
    draft: z.boolean().default(false),
    /** Opt in to VideoObject JSON-LD. Requires youtubeUploadDate and youtubeDuration. */
    youtubeId: z
      .string()
      .regex(/^[A-Za-z0-9_-]{11}$/)
      .optional(),
    /** ISO 8601 datetime with offset, kept as a string so the offset is not rewritten. */
    youtubeUploadDate: z.string().optional(),
    /** ISO 8601 duration, e.g. PT8M16S. */
    youtubeDuration: z.string().optional(),
  }),
});

export const collections = { articles };
