import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return(
        <div className="nav-bar">
            <h1>iTunes Top Twenty</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chart">Chart</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;