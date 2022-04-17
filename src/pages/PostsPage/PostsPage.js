import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";
import css from "./PostPage.module.css";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPost().then(({data}) => setPosts(data))
    }, [])

    return (
        <div className={css.wrap}>

            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>

            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};