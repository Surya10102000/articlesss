import z from "zod";

export const saveBlogPostSchema = z.object({  
  title: z.string().min(1, "Blog title is required").trim(),
  summary: z.string().min(1, "Blog summary is required").trim(),
  content: z.string().min(1, "Blog content is required"),
  image: z.string().optional(),
  likes: z.number().nonnegative().optional(),
});

export const publishBlogPostSchema = z.object({
    title: z.string().min(1, "Blog title is required").trim(),
    summary: z.string().min(1, "Blog summary is required").trim(),
    content: z.string().min(1, "Blog content is required"),
    image: z.string().optional(),
    likes: z.number().nonnegative().optional(),
  });
