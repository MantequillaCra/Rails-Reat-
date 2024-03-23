import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import { fetchAllPostComments } from "../../services/postService";

function PostCommentsList(params) {
    
    const [comments, setComments] = useState([]);
    const [, setLoading] = useState(true);
	const [, setError] = useState(null);
    const { id } = useParams();

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

    return <div>
        {comments.map((comment) => (
            <div key={comment.id} className="post-container">
                <p>{comment.body}</p>
                <hr></hr>
            </div>
        ))}
</div>
}

export default PostCommentsList;