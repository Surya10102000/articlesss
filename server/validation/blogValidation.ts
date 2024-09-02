import z from 'zod'

const blogPostSchema = z.object({
    title : z.string()
    .min(1, 'Title is required')
    .max(100, "Title cannot exceed 100 characters"),

    summary : z.string()
    .min(30, "Summary must be at least 10 characters"),

    content: z.string()
    .min(300,'Content must be at least 300'),

    image : z.string().optional(),
})

module.exports = {
    blogPostSchema
}