import React from "react";
import { Link } from "react-router-dom";

import blogs from "../blogsData.json";

const BlogList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-md p-6 bg-white rounded-lg shadow-md"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.summary}</p>
            <div className="flex items-center mb-4">
              <Link to={`/author/${blog.author}`} className="mr-2">
                <img
                  src={blog.authorImageUrl}
                  alt={blog.author}
                  className="w-10 h-10 rounded-full"
                />
              </Link>
              <div>
                <p className="text-gray-500">{blog.author}</p>
                <p className="text-gray-500">
                  {new Date(blog.date).toLocaleString()}
                </p>
              </div>
            </div>
            <Link
              to={`/blogs/${blog.id}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
