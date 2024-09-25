import { Link } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { PaginationDemo } from "@/components/PaginationDemo";
import axios from "axios";

const article = [
  {
    _id: {
      $oid: "66ec50f76744e869a48a5a06",
    },
    title: "How AI is Transforming Web Development",
    summary:
      "Artificial Intelligence (AI) is revolutionizing web development by automating tasks, enhancing user experience, and improving website optimization. This article explores how AI is being applied in web design, testing, and personalized user experiences.",
    content:
      '<h1>How AI is Transforming Web Development</h1>\n\n<p>Artificial Intelligence (AI) is reshaping various industries, and web development is no exception. From automated design assistance to personalized content delivery, AI is rapidly becoming a crucial tool for developers. In this article, we’ll explore the major ways AI is influencing web development and why it’s important for the future of the web.</p>\n\n<h2>1. AI-Powered Web Design</h2>\n<p>AI tools like <a href="https://www.wix.com">Wix</a> and <a href="https://thegrid.io">The Grid</a> use machine learning to automate website design processes. These platforms analyze user input and generate layouts that are not only visually appealing but also optimized for performance.</p>\n<img src="https://example.com/ai-web-design.jpg" alt="AI Web Design" />\n\n<h2>2. Automated Testing and Debugging</h2>\n<p>AI has streamlined the process of testing websites by detecting bugs and performance issues more efficiently than traditional methods. Tools like <strong>Testim</strong> and <strong>Applitools</strong> use AI to automate the testing process, significantly reducing the time required for quality assurance.</p>\n\n<h2>3. Personalized User Experience</h2>\n<p>One of the most significant impacts of AI in web development is its ability to deliver personalized experiences to users. AI algorithms can analyze user behavior and preferences, helping to customize content, products, and even UI layouts for each individual user.</p>\n\n<h2>Conclusion</h2>\n<p>AI is transforming how developers build, test, and optimize websites. By automating routine tasks and enhancing user experience, AI is setting the foundation for more efficient and user-centric web development. As AI technology continues to evolve, we can expect even more innovative applications in the web development space.</p>\n',
    author: {
      $oid: "66dee4cfb3f4e7b2aa8192b6",
    },
    published: false,
    createdAt: {
      $date: "2024-09-19T16:27:35.662Z",
    },
    updatedAt: {
      $date: "2024-09-19T16:27:35.662Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "66ec50f76744e869a48a5a06",
    },
    title: "How AI is Transforming Web Development",
    summary:
      "Artificial Intelligence (AI) is revolutionizing web development by automating tasks, enhancing user experience, and improving website optimization. This article explores how AI is being applied in web design, testing, and personalized user experiences.",
    content:
      '<h1>How AI is Transforming Web Development</h1>\n\n<p>Artificial Intelligence (AI) is reshaping various industries, and web development is no exception. From automated design assistance to personalized content delivery, AI is rapidly becoming a crucial tool for developers. In this article, we’ll explore the major ways AI is influencing web development and why it’s important for the future of the web.</p>\n\n<h2>1. AI-Powered Web Design</h2>\n<p>AI tools like <a href="https://www.wix.com">Wix</a> and <a href="https://thegrid.io">The Grid</a> use machine learning to automate website design processes. These platforms analyze user input and generate layouts that are not only visually appealing but also optimized for performance.</p>\n<img src="https://example.com/ai-web-design.jpg" alt="AI Web Design" />\n\n<h2>2. Automated Testing and Debugging</h2>\n<p>AI has streamlined the process of testing websites by detecting bugs and performance issues more efficiently than traditional methods. Tools like <strong>Testim</strong> and <strong>Applitools</strong> use AI to automate the testing process, significantly reducing the time required for quality assurance.</p>\n\n<h2>3. Personalized User Experience</h2>\n<p>One of the most significant impacts of AI in web development is its ability to deliver personalized experiences to users. AI algorithms can analyze user behavior and preferences, helping to customize content, products, and even UI layouts for each individual user.</p>\n\n<h2>Conclusion</h2>\n<p>AI is transforming how developers build, test, and optimize websites. By automating routine tasks and enhancing user experience, AI is setting the foundation for more efficient and user-centric web development. As AI technology continues to evolve, we can expect even more innovative applications in the web development space.</p>\n',
    author: {
      $oid: "66dee4cfb3f4e7b2aa8192b6",
    },
    published: false,
    createdAt: {
      $date: "2024-09-19T16:27:35.662Z",
    },
    updatedAt: {
      $date: "2024-09-19T16:27:35.662Z",
    },
    __v: 0,
  },
  
];

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch paginated blogs from the server
  const fetchBlogs = async (page = 1) => {
    try {
      const response = await axios(`http://localhost:3000/api/blogs?page=${page}`);
      setBlogs(response.data.blogs);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage); // Fetch blogs when currentPage changes
  }, [currentPage]);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-dotted">
      {/* Render the blogs */}
      {blogs.map((blog, i) => (
        <BlogCard 
          key={i}
          date={(blog as any).createdAt} 
          title={(blog as any).title} 
          summary={(blog as any).summary} 
          id={(blog as any)._id}
        />
      ))}

      {/* Pagination component */}
      <PaginationDemo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // Updates the current page state
      />
    </div>
  );
};
export default Homepage;
