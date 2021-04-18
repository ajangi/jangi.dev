import React from 'react';
import {
    Link
  } from "react-router-dom";
const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="brand">
                Jangi.dev
            </div>
            <div className="nav-items">
                <Link to={"/"} className="nav-item">Home</Link>
                <Link to={"/open-source"} className="nav-item">Open Source</Link>
                <Link to={"/blog"} className="nav-item">Blog</Link>
            </div>
        </div>
    )
};

export default NavBar;