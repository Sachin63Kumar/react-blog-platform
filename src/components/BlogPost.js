import React from "react";
import { useParams, Link } from "react-router-dom";

import blogs from "../blogsData.json";

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center mb-4">
          <Link to={`/author/${blog.author}`} className="mr-2">
            <img
              src={blog.authorImageUrl}
              alt={blog.author}
              className="w-12 h-12 rounded-full"
            />
          </Link>
          <div>
            <p className="text-gray-500">{blog.author}</p>
            <p className="text-gray-500">
              {new Date(blog.date).toLocaleString()}
            </p>
          </div>
        </div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
