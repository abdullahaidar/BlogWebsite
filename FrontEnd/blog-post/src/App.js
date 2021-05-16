import React, {useState} from 'react';
import { NavigationBar } from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AllPosts } from './components/AllPosts';
import { ShowPost } from './components/ShowPost';
import { AddPost } from './components/AddPost';





const App = () => {

    const [posts, setPosts] = useState([])

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
                        <AddPost />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
