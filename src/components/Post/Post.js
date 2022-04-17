import React from 'react';

import {Button} from "../Button/Button";


const Post = ({post}) => {

    const {id,title} = post;

    return (
        <div>
            {id}) {title}

            <Button to={`${id}`} state={post}>Details Post {id} </Button>

        </div>
    );
};

export {Post};