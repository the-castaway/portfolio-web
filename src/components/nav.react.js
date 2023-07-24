import React from "react";
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" exact='true' style={({ isActive, isPending }) => {
                return {
                    color: isActive ? "red" : "inherit",
                };
            }}>
                Home
            </NavLink>
            <NavLink to="/about" exact='true' style={({ isActive, isPending }) => {
                return {
                    color: isActive ? "red" : "inherit",
                };
            }}>
                About
            </NavLink>
        </nav>
    );
}

export default Nav;