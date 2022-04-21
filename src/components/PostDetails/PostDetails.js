import React from 'react';

import {Link, Outlet} from "react-router-dom";

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>



            <Link to={'comments'}>
                <button key={post.id}>Post Comments</button>
            </Link>

            <hr/>
            <div><Outlet/></div>
        </div>
    );
};

export {PostDetails};