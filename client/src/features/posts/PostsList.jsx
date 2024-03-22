import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchAllPosts } from "../../services/postService.js";


function PostsList() {
	const [posts, setPosts] = useState([]);
	const [, setLoading] = useState(true);
	const [, setError] = useState(null);


	useEffect(() => {
		async function loadPosts() {
			try {
				const data = await fetchAllPosts();
				setPosts(data)
				setLoading(false);;
			} catch (e) {
				setError("An error ocurred. Awkward...");
				setLoading(false)
			} 
		}
		loadPosts()
	}, [])

	// link a /posts/{post.id}
	// la forma de concatenar en JS es ${variable}'
	// <Link to={`/posts/${post.id}'`}><h2>{post.title}</h2></Link>
	return <div>
		{posts.map((post) => (
			<div key={post.id} className="post-container">

				<Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
				<p>{post.body}</p>
				<hr></hr>
			</div>
		))}
	</div>
}

export default PostsList;