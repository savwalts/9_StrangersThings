import React, { useEffect, useState } from 'react';
import {Link, 
    // useHistory
} from 'react-router-dom'; 

const PostsAdd = ({token, setPosts}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // const history = useHistory();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price
                }   
            })
        });
        const {data} = await response.json();
        setTitle('');
        setDescription('');
        setPrice('');
        setPosts(data)
        // history.push('./posts')
    }

    return <> 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(ev) => setTitle(ev.target.value)}placeholder="title"></input>
            <input type="text" value={description} onChange={(ev) => setDescription(ev.target.value)}placeholder="description"></input>
            <input type="text" value={price} onChange={(ev) => setPrice(ev.target.value)}placeholder="price"></input>
            <button type="submit" placeholder="AddPost"></button>
        </form>
        <Link to={`/posts/${posts._id}`}></Link>
    </>
}


export default PostsAdd;
