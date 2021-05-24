import React, { useState, useEffect } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './components/Post';
import AddPost from './components/AddPost';
import PostList from './components/PostList';


const axios = require('axios').default;


const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        sendGetRequest();
    }, []);

    const sendGetRequest = async () => {
        try {
            axios.get('http://localhost:3001/posts').then(resp => setPosts(resp.data))
        } catch (error) {
            console.log(error);
        }
    };

    const addPost = async (post) => {
        try {
            axios.post('http://localhost:3001/posts', { "title": post.title, "content": post.content }).then(() => sendGetRequest())
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Router>
                <NavigationBar />
                <Switch>
                    <Route path='/new'>
                        <AddPost addPost={addPost} post={{ title: '', content: '' }} />
                    </Route>
                    <Route exact path='/'>
                        <PostList posts={posts} />
                        <Post posts={posts} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
