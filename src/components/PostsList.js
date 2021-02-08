import React, { useEffect } from 'react';
import {SinglePost} from './';



const PostsList = ({posts, setPosts, token}) => {

    useEffect(() => {
        fetchPosts()
        console.log('posts: ',)
      }, []);

    const fetchPosts = async () => {

        const response = await fetch('http://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        setPosts(data.data.posts)
      }

    return <>
        <h1>Posts</h1>
        {
            posts && posts.map((post) => {
                return <SinglePost token={token} posts={posts} setPosts={setPosts} post={post} key={post._id}/>
            })
        }
    </>
}


export default PostsList;
