import React, {
  useEffect, 
  useState 
} from 'react';

import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router, 
  Route, 
  // Link, 
  // Switch, 
  // Redirect
} from 'react-router-dom';

import './style.css';
import './bootstrap.css';
import {
  AccountForm,
  PostsList,
  PostsAdd,
  Nav,
} from './components';

const App = () => {
  const [token, setToken] = useState( () => {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else {
      return ''
    }
  });
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  console.log('token: ', token);

  useEffect(() => {
    fetchUser();
    console.log('user: ')
  }, [token])

  const fetchUser = async () =>{
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    })
    const data = await response.json();
    console.log(data)
    setUser(data.data)
  }


  return <>
      <h1>Strangers Things</h1>
      {user?.username && <div>Hello {user?.username}</div> }
              <Nav token={token} setToken={setToken}/>
                <Route exact path="/login">
                  <AccountForm type={'login'} setToken={setToken} setUser={setUser}/>
                </Route>
                
                <Route exact path="/register">
                  <AccountForm type={'register'} setToken={setToken} setUser={setUser}/>
                </Route>

                <Route exact path ="/posts">
                  <PostsList posts={posts} setPosts={setPosts} token={token}/>
                </Route>

                <Route exact path ="/postsAdd">
                  <PostsAdd setPosts={setPosts}/>
                </Route>
  </> 

}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);