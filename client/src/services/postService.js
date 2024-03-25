import { API_URL } from "../constants";

// index in rails controller 
async function fetchAllPosts() {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

// show in rails controller 
async function fetchPost(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}
 
// delete-destroy in rails controller
async function PostDelete(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json
}

// create in rails controller
async function createPost(postData) {
    const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error(response.statusText)
      } 
    //   no olvides poner que se devuelva en formato .json()
      return response.json();
}

async function updatePost (id, postData) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
     }

    return response.json()
}


async function fetchAllPostComments(id) {
    const response = await fetch(`${API_URL}/${id}/post_comments`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

async function PostCommentDelete(id) {
    const response = await fetch(`http://localhost:3000/api/v1/post_comments/${id}/`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json
}

export { PostDelete, fetchPost, fetchAllPosts, createPost, updatePost, fetchAllPostComments, PostCommentDelete }