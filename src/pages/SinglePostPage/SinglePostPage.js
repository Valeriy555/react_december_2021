import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";
import {PostDetails} from "../../components";
import css from "./SinglePostPage.module.css";


const SinglePostPage = () => {
    const {statePost} = useLocation();
    const [post, setPost] = useState(statePost);
    const {id} = useParams();


    useEffect(() => {
        if(!statePost){
        postService.getByIdPost(id).then(({data}) => setPost(data))

        }else {
            setPost(statePost)
        }
    }, [id, statePost])

    return (
        <div className={css.wrapPost}>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};