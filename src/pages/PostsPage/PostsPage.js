import React, {useEffect, useState} from 'react';

import {postService} from "../../services";
import {Post} from "../../components";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
      postService.getAllPost().then(({data})=> setPosts(data))
  },[])
    return (
        <div>
            {posts.map(post=><Post key = {post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};