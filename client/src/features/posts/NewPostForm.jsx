import React, {useState} from "react";
import {Form, useNavigate} from "react-router-dom";
import {API_URL} from "../../constants.js";

function NewPostForm () {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {title,body}

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        if (response.ok) {
            const {id} = await response.json();
            navigate(`/posts/${id}`);
        }else {
            console.log("An error has ocurred");
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

export default NewPostForm