import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='nav-wrapper'>
            <h1>Traveling The World With My World</h1>
            <div className="nav-link-wrapper">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/newblog">New Blog</Link>
                <Link to="/seo">Seo</Link>


            </div>
        </nav>
    )
}