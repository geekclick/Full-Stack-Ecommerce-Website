import { z } from "zod";

export const productSchema = z.object({
    // images: z.string().min(6).max(120),
    name: z.string().min(6).max(120),
    description: z.string().min(10).max(255),
    price: z.string().min(0),
    available: z.boolean().default(false).optional(),
    category: z.string()
});
