import { formatDate } from "@/utils/formatDate";
import { ArrowBigRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({
  date,
  title,
  summary,
  id,
}: {
  date: string;
  title: string;
  summary: string;
  id: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-6  ">
      <p className="font-mono mb-8 tracking-tighter text-gray-500">
        {formatDate(date)}
      </p>
      <div className="text-5xl tracking-tight leading-tight  duration-75 mb-8 line-clamp-3 md:line-clamp-2 hover:text-primary">
        <h1 onClick={() => navigate(`/blog/${id}`)}>{title}</h1>
      </div>
      <p className="line-clamp-5 leading-relaxed text-balance mb-8 text-gray-700 md:line-clamp-4">
        {summary}
      </p>
      <button
        onClick={() => navigate(`/blog/${id}`)}
        className="flex duration-75 font-semibold mb-8 text-gray-700 hover:text-primary"
      >
        Read now {<ArrowBigRightIcon />}
      </button>
    </div>
  );
};
export default BlogCard;
