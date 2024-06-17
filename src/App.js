import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import AuthorPage from "./components/AuthorPage";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/author/:author" element={<AuthorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
