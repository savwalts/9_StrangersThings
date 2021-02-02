import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 



const PostsList = ({posts, setPosts}) => {

    // if (!posts) {
    //     return <div> No Posts </div>
    // }

    useEffect(() => {
        fetchPosts()
        console.log('posts: ',)
      }, []);

    const fetchPosts = async () => {

        const response = await fetch('http://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts')
        const data = await response.json();
        // console.log(data.data.posts);
        setPosts(data.data.posts)
      }

    return <>
        <h1>Posts</h1>
        {
            posts && posts.map((post) => {
                return <>
                    <div key={ post.id }>
                        <h3>{ post.title }</h3>
                        <div>{ post.body }</div>
                    </div>
                </>
            })
        }
    </>
}


export default PostsList;
