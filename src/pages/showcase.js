import React from 'react';
import {
    Route,
    Routes,
    useLocation,
    NavLink
} from "react-router-dom"
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import { gsap } from "gsap";
//pages
import Home from './home';
import About from './about';
import Project1 from './projects/project1';
import Project2 from './projects/project2';
//components
import Header from '../components/header.react';

const Showcase = () => {
    const location = useLocation();
    return (
        <div>
            <Header headerContent="Showcase" />
            <nav>
                <NavLink to="/showcase/project1" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "black",
                    };
                }}>
                    Project 1
                </NavLink>
                <NavLink to="/showcase/project2" style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "black",
                    };
                }}>
                    Project 2
                </NavLink>

            </nav>
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames="page" timeout={1200}>
                    <Routes location={location}>
                        <Route path="/project1" element={<Project1 />} />
                        <Route path="/project2" element={<Project2 />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Showcase;
