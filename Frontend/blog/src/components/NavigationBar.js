import React from 'react';
import { Link } from 'react-router-dom'

export const NavigationBar = () => {
  return (
    <header className="header">
      <Link to='/'><div className="logo">Blog Project</div></Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <Link to='/new'>Add New Post</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}
