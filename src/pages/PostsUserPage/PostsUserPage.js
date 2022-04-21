import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services";

const PostsUserPage = () => {

    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getByUserPosts(id).then((data) => setPosts([...data]))
    },[])


    return (
        <div>
            {posts.map(post => <div key={post.id}>
                <div>Id: {post.id}</div>
                <div>UserId: {post.userId}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
                    <hr/>
                </div>
                )}
        </div>
    );
};

export {PostsUserPage};