import { z } from "zod";

export const librarySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  cnpj: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type libraryType = z.infer<typeof librarySchema>;

export const libraryArraySchema = z.array(librarySchema);

export const libraryInputSchema = librarySchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type libraryInputType = z.infer<typeof libraryInputSchema>;

export const libraryInputFilterSchema = librarySchema.omit({
  id: true,
  shelf: true,
  created_at: true,
  updated_at: true,
});

export type libraryInputFilterType = z.infer<typeof libraryInputFilterSchema>;