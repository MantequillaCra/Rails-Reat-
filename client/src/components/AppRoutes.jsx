import React from "react";
import { Route, Routes } from "react-router-dom";


import PostsList from "../features/posts/PostsList.jsx";
import PostDetails from "../features/posts/PostDetails.jsx"
import NewPostForm from "../features/posts/NewPostForm.jsx";
import PostEditForm from "../features/posts/PostEditForm.jsx";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList/>}/>
            <Route path="/new" element={<h1><NewPostForm/></h1>}/>
            <Route path="posts/:id" element={<PostDetails />}/>
            <Route path="posts/:id/edit" element={<PostEditForm/>}/>
        </Routes>
    );
}

export default AppRoutes