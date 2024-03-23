import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PostDelete, fetchPost } from "../../services/postService.js";
import PostCommentsList from '../post_comments/PostCommentsList.jsx'

function PostDetails () {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //busca el post por su ID
        const fetchCurrentPost = async () => {
            try {
                const json = await fetchPost(id);
                setPost(json);
            } catch (e) {
                console.log("Ocurrio un error al buscar tu Post:",e)
            }
        };
        fetchCurrentPost()
    }, [id]);

    const deletePost = async () => {
        try {
            await PostDelete(id);
            navigate("/")
        } catch (e) {
            console.error("Ocurrio un error al eliminar tu post", e);
        }

    };
    if(!post) return <h2>loading..</h2>

    return <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to={`edit`}><p>editar</p></Link>
        <button onClick={deletePost}>Delete</button>
        < PostCommentsList />
    </div>
}

export default PostDetails