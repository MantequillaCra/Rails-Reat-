import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = { title, body };

    try {
      const response = await createPost(postData);
      navigate(`/posts/${response.id}`);
    } catch (e) {
      console.error("Ocurrio un error al crear");
    }
  };

  return (
    <div>
      Formulario para crear un nuevo post
      <form onSubmit={handleSubmit}>
        <h6>
          <label htmlFor="titleInput">title:</label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </h6>
        <h6>
          <label htmlFor="bodyInput">body:</label>
          <input
            id="bodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </h6>
        <div>
          <button type="submit">Aceptar</button>
        </div>
      </form>
    </div>
  )
}

export default NewPostForm;