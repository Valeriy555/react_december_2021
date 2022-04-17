import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";

const CommentsPostPage = () => {

    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        postService.getByPostComments(id).then((data) => setComments([...data]))

    }, [])

    return (
        <div>
            {comments.map(comment => <div key={comment.id}>

                PostId:{comment.postId} <br/>
                ID: {comment.id} <br/>
                Name: {comment.name} <br/>
                Email: {comment.email} <br/>
                Body: {comment.body}
                <hr/>
                </div>
            )}
        </div>
    );
};

export {CommentsPostPage};