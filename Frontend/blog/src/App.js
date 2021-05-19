import React, {useState, useEffect} from 'react';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AllPosts } from './components/AllPosts';
import { ShowPost } from './components/ShowPost';
import { AddPost } from './components/AddPost';


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

    const addPost = async (title) => {
        try {
            axios.post('http://localhost:3001/posts', { "title": title }).then(() => sendGetRequest())
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Router>
                <NavigationBar />
                <Switch>
                    <Route exact path='/'>
                        <AllPosts />
                    </Route>
                    <Route path='/show-post'>
                        <ShowPost />
                    </Route>
                    <Route path='/new-post'>
                        <AddPost addPost={ addPost}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
