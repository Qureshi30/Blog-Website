import React from "react";
import "./blog.css";
// import { blog, category } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = ({
  blogs
}) => {
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {blogs.map((item) => (
            <div className="box boxItems" key={item._id}>
              <div className="img">
                <img src={
                  `/images/blogs/th${
                    Math.floor(Math.random() * 2)
                  }.jpg`
                } alt="" />
              </div>
              <div className="details">
                {/* <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{
                    category[
                      Math.floor(Math.random() * 8) + 1
                    ].category
                  }</a>
                </div> */}
                <Link to={`/details/${item._id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.description.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" /> <label htmlFor="">{
                    new Date(item.createdAt).toLocaleDateString()
                  }</label>
                  <AiOutlineShareAlt className="icon" /> <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
