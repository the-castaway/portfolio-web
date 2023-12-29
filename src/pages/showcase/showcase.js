import { React, useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
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
    const [isActive, setIsActive] = useState(false);

    //refs
    let showcase = useRef(null);


    useEffect(() => {
        // Loading function to load data or
        // fake it using setTimeout;
        gsap.registerPlugin(SplitText);
        const header = showcase.querySelectorAll('.header');
        const tl = gsap.timeline(),
            mySplitText = new SplitText(header, { type: "chars" }),
            chars = mySplitText.chars; //an array of all the divs that wrap each character

        tl.from(chars, {
            duration: 0.4,
            opacity: 0,
            y: 100,
            rotationX: 0,
            ease: "ease",
            stagger: 0.05
        });

    }, []);

    return (
        <div id="showcase" ref={el => showcase = el}>
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














