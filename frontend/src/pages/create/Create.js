import React , { useState }  from 'react'
import "./create.css";
export const Create = () => {
  const reader = new FileReader();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the create action here
    fetch(`http://localhost:4000/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description: content }),
      // body: formData,
    }).then(async (res) => {
      // redirect to /details/_id
      const res1 = await res.json();
      window.location.replace(`/`);
    }).catch((err) => {
      console.log(err);
    });
  };
  
  return (
    <div id="create_wrapper">
      <div id="create_form">
        <h1>Post A Blog Now!</h1>
        <form onSubmit={handleSubmit} action="/create-blog" method="POST">
          <input className="" type="text" name="title" placeholder="Blog Title" value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <textarea name="body" id="" cols="30" rows="10"
            placeholder="What Would you like to write today...?🤔" value={content}
            onChange={(e) => setContent(e.target.value)} ></textarea>
            {/* <input type='file'  onChange={(e)=> {setImage(e.target.files[0])}} />  */}
          <button type="submit" className="button" >Create</button>
        </form>
      </div>
    </div>
  );
}
export default Create;