import React from 'react';
import {Button} from "../Button/Button";
import {Link, Outlet} from "react-router-dom";

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>

            <hr/>

            <Link to={'comments'}>
                <button key={post.id}>Post Comments</button>
            </Link>

            <div><Outlet/></div>
        </div>
    );
};

export {PostDetails};