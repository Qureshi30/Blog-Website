import React from "react"
import { Card } from "../../components/blog/card";

// import { Category } from "../../components/category/Category"

import { useState } from "react";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs from the backend
  const fetchBlogs = async () => {
    console.log("Fetching blogs...");
    
    const response = await fetch("http://localhost:4000/posts");

    const data = await response.json();

    console.log(data);

    setBlogs(data);
  };

  // Fetch all blogs on initial render
  React.useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to add a new blog to the list
  const addBlog = (blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, blog]);
  };

  return (
    <>
      {/*  <Slider />*/}
      {/* <Category /> */}
      <Card blogs={blogs} />
      {/* Render your create blog form here */}
    </>
  );
};

