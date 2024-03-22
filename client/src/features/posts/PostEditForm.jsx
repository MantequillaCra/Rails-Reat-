import { json, useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { fetchPost, updatePost } from "../../services/postService.js";

function PostEditForm () {
    const [post, setPost]  = useState(null);
    const { id } = useParams();
    const [,setLoading] = useState(true);
    const [,setError] = useState(null);
    const navigate = useNavigate();

    useEffect( () => {
        const fetchCurrentPost = async () => {
            try {
                const response = await fetchPost(id);
                setPost(response);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchCurrentPost()
    },[id])

    const handleSubmit =async (e) => {
        e.preventDefault();

        
        const updatedPost = {
            title: post.title,
            body: post.body,
        };

        try {
            const response = await updatePost(id,updatedPost);
            navigate(`/posts/${response.id}`);
        } catch (e) {
            consloe.error("Ocurrio un error editando tu post", e)
        }
    }
    if (post) {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">titulo</label>
                    <input
                        type="text"
                        id="title"
                        value={post.title}
                        onChange={(e) => setPost({...post, title: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="body">Cuerpo</label>
                    <textarea
                        id="body"
                        value={post?.body}
                        onChange={(e) => setPost({...post, body: e.target.value})}
                    />
                </div>
                <div>
                    <button type="submit">guardar</button>
                </div>
            </form>
        )
    }
    else{ return <h1>no existe </h1>;
    }
}

export default PostEditForm;