import React from "react";
import { NavLink } from "react-router-dom"
//styles
import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink to="/" exact='true' className='nav-title'>
                Jaime Castaneda
            </NavLink>
            <div className="nav-social">
                <a href="https://www.linkedin.com/in/jaime-castaneda-956154a8/">
                    linkedin
                </a>
                <a href="https://www.instagram.com/the_casta_way/">
                    instagram
                </a>
                <a href="https://twitter.com/the_casta_way">
                    twitter
                </a>
            </div>
            <div className="nav-links">
                <NavLink to="/about" exact='true' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "Blue" : "#DCDCDC",
                    };
                }}>
                    about
                </NavLink>
                <NavLink to="/showcase" exact='true' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "Blue" : "#DCDCDC",
                    };
                }}>
                    showcase
                </NavLink>
                <NavLink to="/showcase" exact='true' style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "Blue" : "#DCDCDC",
                    };
                }}>
                    contact
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;