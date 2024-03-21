import React, {useState, useEffect} from "react";
import { API_URL } from "../../constants.js";
import {Link} from "react-router-dom";


function  PostsList(){
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    useEffect( () => {
        async function loadPosts() {
            try {
                const response = await fetch( API_URL );
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("An error ocurred. Awkward...");
                console.log("An error ocurred:", e);
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    }, [])

    // link a /posts/{post.id}
    // la forma de concatenar en JS es ${variable}'
    // <Link to={`/posts/${post.id}'`}><h2>{post.title}</h2></Link>
    return <div>
        {posts.map((post) =>(
            <div key={post.id} className="post-container">

                <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
                <p>{post.body}</p>
                <hr></hr>
            </div>
        ))}
    </div>
}

export default PostsList;