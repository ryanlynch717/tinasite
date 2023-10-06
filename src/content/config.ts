import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    pub_date: z.date(),
  }),
});

const authorsCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'posts': postsCollection,
  'authors': authorsCollection,
};