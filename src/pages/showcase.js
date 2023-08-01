import React from 'react';
import {
    Route,
    Routes,
    useLocation,
    Link,
    Outlet
} from "react-router-dom"
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import { gsap } from "gsap";
//pages
import Project1 from './projects/project1';
import Project2 from './projects/project2';
//components
import Header from '../components/header.react';
//styles
import '../styles/showcase.css';

const Showcase = () => {
    //const location = useLocation();
    //console.log(location, location.key);
    const location = useLocation();
    const onExit = () => {
        //console.log("hellp")
    }
    return (
        <div id="showcase">
            <Header headerContent="Showcase" />
            <div>
                <Link to="project1">
                    Project 1
                </Link>
                <Link to="project2">
                    Project 2
                </Link>
            </div>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={0}
                    onExit={onExit()}
                >
                    <Outlet />
                </CSSTransition>
            </TransitionGroup>
            {/* <TransitionGroup component={null}>
                <CSSTransition classNames="project" timeout={300}>
                    <Routes>
                        <Route path="/project1" element={<Project1 />} />
                        <Route path="/project2" element={<Project2 />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup> */}
        </div>
    );
}

export default Showcase;
