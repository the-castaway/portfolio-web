import { React, useEffect, useState } from 'react';
import { SwitchTransition, Transition, CSSTransition } from 'react-transition-group';
import {
    Link,
    Outlet,
    useLocation
} from "react-router-dom"
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
import '../../styles/showcase.css';

const Showcase = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    return (
        <div id="showcase">
            <div className='showcase-header'>
                <Header headerContent="Showcase" />
            </div>
            <div>
                <Link to="project1">
                    Project 1
                </Link>
                <Link to="project2">
                    Project 2
                </Link>
            </div>
            <Outlet />
        </div>

    );
}

export default Showcase;














