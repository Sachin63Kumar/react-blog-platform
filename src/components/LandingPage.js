import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/landing-bg.jpg"; // Replace with your actual background image path

const LandingPage = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div
        className="container mx-auto text-center text-white relative z-10"
        style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to the Tech Blog</h1>
        <p className="text-lg mb-6">
          Your source for the latest in technology, innovation, and industry
          insights.
        </p>
        <Link
          to="/blogs"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Blog Posts
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
