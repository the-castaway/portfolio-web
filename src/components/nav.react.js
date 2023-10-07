import { React, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//styles
import '../styles/nav.css';

const Nav = ({ location }) => {
    const pathname = location.pathname;
    const [previousPath, setPreviousPath] = useState(pathname);
    gsap.registerPlugin(SplitText);
    let nav = useRef(null);
    // title timeline refs
    let title_move = useRef(null);
    let title_fade_1 = useRef(null);
    let title_fade_2 = useRef(null);
    // social timeline refs
    let social_fade = useRef(null);
    // link timeline refs
    let link_container = useRef(null);
    let link_1 = useRef(null);
    let link_2 = useRef(null);
    let link_3 = useRef(null);
    let link_expand = useRef(null);


    useLayoutEffect(() => {
        if (["/"].includes(pathname) && pathname !== previousPath) {
            //container styling
            nav.style = "padding: 0px 40px";
            //GSAP animations
            let ctx = gsap.context(() => {
                //title timeline
                const title_tl = gsap.timeline();
                title_tl.to(title_move, {
                    duration: 0.4,
                    x: 0,
                }, 0)
                title_tl.to(title_fade_1, {
                    duration: 0.3,
                    opacity: 1,
                    delay: 0.3,
                }, 0)
                title_tl.to(title_fade_2, {
                    duration: 0.3,
                    opacity: 1,
                    delay: 0.3,
                }, 0)
                //social timeline
                const social_tl = gsap.timeline();
                social_tl.to(social_fade, {
                    delay: 0,
                    duration: 0.4,
                    opacity: 1,
                    display: 'flex',
                }, 0)
                //link timeline
                const link_tl = gsap.timeline();
                link_tl.to(link_expand, {
                    duration: 0.4,
                    rotate: 0,
                    opacity: 0,
                    display: 'none',
                }, 0)
                link_tl.to(link_container, {
                    duration: 0.5,
                    width: 325,
                    height: 41,
                }, 0)
                link_tl.to(link_1, {
                    duration: 0.3,
                    opacity: 1,
                    display: 'block',
                    delay: 0.3
                }, 0)
                link_tl.to(link_2, {
                    duration: 0.3,
                    opacity: 1,
                    display: 'block',
                    delay: 0.2
                }, 0)
                link_tl.to(link_3, {
                    duration: 0.3,
                    opacity: 1,
                    display: 'block',
                    delay: 0.1
                }, 0)
            })
        }
        else if ((["/about", "/showcase"].includes(pathname) && pathname !== previousPath)) {
            //container styling
            nav.style = "padding: 0px 20px";
            //GSAP animations
            let ctx = gsap.context(() => {
                //title timeline
                const title_tl = gsap.timeline();
                title_tl.to(title_fade_1, {
                    duration: 0.3,
                    opacity: 0,
                }, 0)
                title_tl.to(title_fade_2, {
                    duration: 0.2,
                    opacity: 0,
                }, 0)
                title_tl.to(title_move, {
                    delay: 0.1,
                    duration: 0.4,
                    x: -47,
                }, 0)
                //social timeline
                const social_tl = gsap.timeline();
                social_tl.to(social_fade, {
                    delay: 0,
                    duration: 0.4,
                    opacity: 0,
                    display: 'none',
                }, 0)
                //link timeline
                const link_tl = gsap.timeline();
                link_tl.to(link_container, {
                    duration: 0.5,
                    width: 41,
                    height: 41,
                }, 0)
                link_tl.to(link_1, {
                    duration: 0.3,
                    opacity: 0,
                    display: 'none'
                }, 0)
                link_tl.to(link_2, {
                    duration: 0.3,
                    opacity: 0,
                    display: 'none',
                    delay: 0.1
                }, 0)
                link_tl.to(link_3, {
                    duration: 0.3,
                    opacity: 0,
                    display: 'none',
                    delay: 0.2
                }, 0)
                link_tl.to(link_expand, {
                    duration: 0.4,
                    rotate: 90,
                    opacity: 1,
                    display: 'flex',
                    delay: 0.4
                }, 0)
            })
        }
        setPreviousPath(location.pathname);
    }, [pathname, previousPath]);

    return (
        <nav ref={el => nav = el} className='nav'>
            <NavLink to="/" exact='true' className='nav-title'>
                <div>J</div>
                <div ref={el => title_fade_1 = el}>aime</div>
                <div ref={el => title_move = el}>C</div>
                <div ref={el => title_fade_2 = el}>astaneda</div>
            </NavLink>
            <div className="nav-social" ref={el => social_fade = el}>
                <a href="https://www.linkedin.com/in/jaime-castaneda-956154a8/">
                    Linkedin
                </a>
                <a href="https://www.instagram.com/the_casta_way/">
                    Instagram
                </a>
                <a href="https://twitter.com/the_casta_way">
                    Threads
                </a>
            </div>
            <div className="nav-links">
                <div ref={el => link_container = el} className="nav-links-border" />
                <div className="nav-links-content">
                    <NavLink ref={el => link_1 = el} to="/showcase" exact='true'>
                        Showcase
                    </NavLink>
                    <NavLink ref={el => link_2 = el} to="/about" exact='true'>
                        About
                    </NavLink>
                    <a ref={el => link_3 = el} href="mailto:jccd.designs@gmail.com">
                        Contact
                    </a>
                </div>
                <div ref={el => link_expand = el} className="nav-button-expand">
                    <div className="nav-button-cross-horizontal" />
                    <div className="nav-button-cross-vertical" />
                </div>
            </div>
        </nav>
    );
}

export default Nav;