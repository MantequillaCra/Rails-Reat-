import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { fetchAllPostComments, PostCommentDelete } from "../../services/postService";

function PostCommentsList(params) {
    
    const [comments, setComments] = useState([]);
    const [, setLoading] = useState(true);
	const [, setError] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        async function loadPostComments() {
            try {
                const response = await fetchAllPostComments(id);
                setComments(response);
                setLoading(false)
            } catch (e) {
                setError("An error ocurred. Awkward...");
				setLoading(false)
            }
        }
        loadPostComments()
    },[])

    const deleteComment = async (id) => {
        try{
            await PostCommentDelete(id);
            setComments(comments.filter((comment) => comment.id !== id ));
        } catch (e) {
            console.error("Ocurrio un error al borrar",e)
        }
    } 

    return <div>
        {comments.map((comment) => (
            <div key={comment.id} className="post-container">
                <p>{comment.body}</p>
                <button onClick={ () => deleteComment(comment.id) }>eliminar</button>
            </div>
        ))}
</div>
}

export default PostCommentsList;