import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {API_URL} from "../../constants.js";

function PostDetails () {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //busca el post por su ID
        const fetchCurrentPost = async () => {
            try {
                const response = await fetch( `${API_URL}/${id}` )
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                } else {
                    throw response;
                }
            } catch (e) {
                console.log("An error ocurred:",e)
            }
        };
        fetchCurrentPost()
    }, [id]);

    const deletePost = async () => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                navigate("/");
            } else {
                throw response;
            }
        } catch (e) {
            console.error(e)
        }

    };
    if(!post) return <h2>loading..</h2>

    return <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to={`edit`}><p>editar</p></Link>
        <button onClick={deletePost}>Delete</button>
    </div>
}

export default PostDetails