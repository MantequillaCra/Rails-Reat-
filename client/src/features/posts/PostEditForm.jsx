import { useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {API_URL} from "../../constants.js";
import App from "../../App.jsx";
import {render} from "react-dom";

function PostEditForm () {
    const [post, setPost]  = useState(null);
    const { id } = useParams();
    const [,setLoading] = useState(true);
    const [,setError] = useState(null);
    const navigate = useNavigate();

    useEffect( () => {
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
        }
        fetchCurrentPost()
    },[id])

    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: post.title,
                    body: post.body
                }),
            });
            if (response.ok) {
                const json = await response.json();
                console.log("Success",json);
                navigate(`/posts/${id}`)
            } else {
                throw response;
            }
        } catch (e) {
            console.log("An error has occurred...",e);
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