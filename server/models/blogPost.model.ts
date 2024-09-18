import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },
    summary : {
        type : String, 
        required : [true, "Blog summary is required"],
        trim: true,
    },
    content: {
      type: String ,
      required : true,
    },
    image:{
      type : String
    },
    likes : {
      type : Number
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    published : {
      type : Boolean, 
      require : true,
      default : false,
    }
  },
  {
    timestamps: true,
  }
);


export const BlogPost = mongoose.model('BlogPost', BlogPostSchema);