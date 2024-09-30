import "./styles.scss";
import hljs from "highlight.js";

import BlogSkeleton from "@/components/blogpage/BlogSkeleton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "@/utils/formatDate";

const apiUrl = import.meta.env.VITE_NODE_API;


const BlogPage = () => {
  const { blogId } = useParams();

  const [date, setDate] = useState("")
  const [ username , setUsername ] = useState("")
  const [title , setTitle] = useState("")
  const [content , setContent] = useState("")
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true); 

  const getPost = async ()=>{
    try {
      setLoading(true)
      const response = await axios.get(`${apiUrl}/api/blogs/${blogId}`)
      setDate(formatDate(response.data.createdAt))
      setUsername(response.data.author.username)
      setTitle(response.data.title)
      setContent(response.data.content)
      setLoading(false)
    } catch (error) {
      setError("Error in fetch the data")
      setLoading(false)
    }

    hljs.highlightAll();
  }
  useEffect(() => {
    getPost()
  },[]);

  if(error) return <div>Can't Open the blog</div>

  return !loading ? (
    <div className="ProseMirror max-w-2xl m-auto">
      <div>
        <p className="text-slate-800 font-extrabold tracking-wide text-lg">{username}</p>
        <p className="text-slate-600 text-xs">Posted on {date}</p>
      </div>
      <h1>{title}</h1>
      <div className="ProseMirror"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    </div>
  ) : (
    <BlogSkeleton />
  );
};
export default BlogPage;
