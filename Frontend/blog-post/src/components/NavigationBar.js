import React from 'react';
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <header className="header">
        <div className="logo">Blog Project</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Posts</Link>
            </li>
            <li>
              <Link to='/new-post'>Add New Post</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    )
}
