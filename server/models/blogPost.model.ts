import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 300 characters"],
    },
    summary : {
        type : String, 
        required : [true, "Blog summaey is required"],
        trim: true,
        minlength : [30, "Blog Summary must be at least 30 characters"],
        maxlength : [100, "Blog Summary cannot exceed 100 characters"]
    },
    content: {
      type: String,
      required: [true, "Blog content is required"],
      minlength: [300, "Content must be at least 300 characters"],
    },
    image:{
      type : String
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
  },
  {
    timestamps: true,
  }
);


export const BlogPost = mongoose.model('BlogPost', BlogPostSchema);