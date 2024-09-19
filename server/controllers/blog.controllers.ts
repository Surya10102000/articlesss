import { Request, Response } from "express";
import { saveBlogPostSchema } from "../validation/blogValidation";
import { ZodError } from "zod";
import { handleZodError } from "../utils/zodErrorHandler";
import { BlogPost } from "../models/blogPost.model";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const validatedData = saveBlogPostSchema.parse(req.body);

    const userId = (req.user as any)?._id?.toString();
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const newBlog = new BlogPost({
      ...validatedData,
      author: userId,
    });

    const savedBlog = await newBlog.save()

    return res.status(201).json({
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return res.status(400).json(handleZodError(error));
    }

    return res.status(500).json({
      error: error.message || "Internal server error",
    });
  }
};

export const publishPost = ( req : Request , res : Response) =>{
  try {
    
  } catch (error : any) {
    return res.status(500).json({
      error: error.message || "Internal server error",
    });
  }
}