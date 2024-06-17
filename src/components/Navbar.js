import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Tech Blog
        </Link>
        <div>
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-gray-300 hover:text-white px-3 py-2 rounded"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
