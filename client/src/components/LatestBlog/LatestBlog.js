import React from "react";
import "./Latestblog.scss";
import BlogCard from "../BlogCard/BlogCard";
import LatestBlogCard from "./LatestBlogCard";

const LatestBlog = () => {
  return (
    <div className="max-w-7xl m-auto flex flex-col items-center mt-20 space-y-4 mb-20">
      <p className="text-brownmain text-lg">OUR BLOG</p>
      <p className="text-black opacity-80 text-5xl font-bold">
        Latest articles
      </p>

      <div className="flex justify-center space-x-6 pt-4">
        <LatestBlogCard />
        <LatestBlogCard />
        <LatestBlogCard />
      </div>
    </div>
  );
};

export default LatestBlog;