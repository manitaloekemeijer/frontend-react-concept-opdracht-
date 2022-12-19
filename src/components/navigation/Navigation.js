import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="navContainer">
            <ul>
                <li><NavLink to="/" className="navList">Hottest Posts</NavLink></li>
                <li><a href="https://www.reddit.com/" className="navList">Reddit</a></li>
                <li><NavLink to="/subreddit/memes" className="navList">Memes</NavLink></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navigation;