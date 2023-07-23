import React from "react";
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" exact activeStyle={{ fontWeight: 'bold', color: '#dddddd' }}>Home</NavLink>
            <NavLink to="/about" exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>About</NavLink>
        </nav>
    );
}

export default Nav;