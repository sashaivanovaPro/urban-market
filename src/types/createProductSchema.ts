import { z } from "zod";

export const createProductSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce
    .number()
    .positive("Price must be positive")
    .min(0.5, "Price must be at least 0.5"),
  category: z.string().min(1, "Please select a category"),
  brand: z.string().min(1, "Brand is required"),
  stock: z.coerce.number().int().nonnegative("Stock must be 0 or positive"),
  thumbnail: z
    .string()
    .url("Thumbnail must be a valid URL")
    .min(1, "Thumbnail URL is required"),
  discountPercentage: z.coerce
    .number()
    .min(0, "Discount cannot be negative")
    .max(100, "Discount cannot exceed 100%")
    .optional(),
  rating: z.coerce
    .number()
    .min(0, "Rating must be at least 0")
    .max(5, "Rating cannot exceed 5")
    .optional(),
  images: z.string().optional(),
});

export type CreateProductFormData = z.infer<typeof createProductSchema>;
