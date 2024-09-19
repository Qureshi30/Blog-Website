import React, { useState, useEffect } from "react";
import "./Details.css";
import "../../components/navbar/navbar.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";

const DetailsPages = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:4000/posts/${id}`);
      const data = await response.json();
      console.log(data);
      setBlog(data);
      setTitle(data.title);
      setContent(data.description);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleDelete = () => {
    // Perform the delete action here
    // You can remove the blog item from the data or perform any other necessary actions
    fetch(`http://localhost:4000/posts/delete/${id}`, {
      method: "DELETE",
    }).then(() => {
      setShowModal(false);

      // Redirect to home page after deletion
      window.location.replace("/");
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Perform the update action here
    fetch(`http://localhost:4000/posts/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description: content }),
    }).then(() => {
      // You can update the blog item in the data or perform any other necessary actions
      setIsEditing(false);
      // Refresh the page after update
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    });
  };
  

  return (
    <>
      {blog ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={
                // choose any random image from /images/blogs/<b1, b2, b3, b4, b5>.jpg
                `/images/blogs/th${
                    Math.floor(Math.random() * 2) 
                  }.jpg`
              } alt="" />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button" onClick={handleEdit}>
                  <BsPencilSquare />
                </button>
                <button className="button" onClick={() => setShowModal(true)}>
                  <AiOutlineDelete />
                </button>
              </div>
              {isEditing ? (
                <form onSubmit={handleUpdate}>
                  <p>Title:<input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  /></p>
                  <p>Description:
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea></p>

                  <button type="submit" className="button">
                    Update Post
                  </button>
                </form>
              ) : (
                <>
                  <h1>{blog.title}</h1>
                  <p>{blog.description}</p>
                </>
              )}
              <p>Author: Hassan</p>
            </div>
          </div>
        </section>
      ) : null}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this blog?</p>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button1 onClick={handleDelete}>Delete</button1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPages;