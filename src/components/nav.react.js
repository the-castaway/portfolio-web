import { React, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//styles
import '../styles/nav.css';

const Nav = ({ location }) => {
    const pathname = location.pathname;
    const [previousPath, setPreviousPath] = useState(pathname);
    const [collapsed, setCollapsed] = useState(true)
    const [mediaMatched, setMediaMatched] = useState()
    gsap.registerPlugin(SplitText);
    //nav refs
    let nav = useRef(null);
    //title timeline refs
    let title_move = useRef(null);
    let title_fade_1 = useRef(null);
    let title_fade_2 = useRef(null);
    //social timeline refs
    let social_fade = useRef(null);
    //link timeline refs
    let link_container = useRef(null);
    let link_1 = useRef(null);
    let link_2 = useRef(null);
    let link_3 = useRef(null);
    let link_expand = useRef(null);
    let link_expand_line = useRef(null);
    //modal refs
    let modal = useRef(null);

    // const matchWindow = window.matchMedia("(max-width: 600px)");
    // matchWindow.addEventListener("change", () => { setMediaMatched(matchWindow) });

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

    const expandModal = () => {
        setCollapsed(false);
        let ctx = gsap.context(() => {
            const modal_tl = gsap.timeline();
            modal_tl.to(modal, {
                duration: 1,
                opacity: 1,
                display: 'flex',
            }, 0)
            modal_tl.to(link_expand, {
                duration: 0.4,
                rotate: 0,
                opacity: 1,
                display: 'flex',

            }, 0)
            modal_tl.to(link_expand_line, {
                duration: 0.4,
                rotate: -90,
                opacity: 1,
                display: 'flex',
            }, 0)
        })
    }

    const collapseModal = () => {
        if (collapsed === false) {
            setCollapsed(true);
            let ctx = gsap.context(() => {
                const modal_tl = gsap.timeline();
                modal_tl.to(modal, {
                    duration: 1,
                    opacity: 0,
                    display: 'none',
                }, 0)
                modal_tl.to(link_expand, {
                    duration: 0.4,
                    rotate: 90,
                    opacity: 1,
                    display: 'flex',
                }, 0)
                modal_tl.to(link_expand_line, {
                    duration: 0.4,
                    rotate: 0,
                    opacity: 1,
                    display: 'flex',
                }, 0)

            })
        }
    }

    const toggleModal = () => {
        if (collapsed) {
            expandModal();
        }
        else {
            collapseModal();
        }
    }

    return (
        <>
            <nav ref={el => nav = el} className='nav'>
                <NavLink onClick={() => { collapseModal(); }} to="/" exact='true' className='nav-title'>
                    <div className='nav-title-j'>J</div>
                    <div className='nav-title-aime' ref={el => title_fade_1 = el}>aime</div>
                    <div className='nav-title-c' ref={el => title_move = el}>C</div>
                    <div className='nav-title-astaneda' ref={el => title_fade_2 = el}>astaneda</div>
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
                    <div ref={el => link_expand = el} onClick={() => { toggleModal(); }} className="nav-button-expand">
                        <div className="nav-button-cross-horizontal" />
                        <div ref={el => link_expand_line = el} className="nav-button-cross-vertical" />
                    </div>
                </div>
            </nav>
            <div ref={el => modal = el} className="nav-modal">
                <ul>
                    <li><h2>work</h2></li>
                    <li><h2>about</h2></li>
                    <li><h2>hello@jaimecastaneda.com</h2></li>
                    <li><h2>+1.408.828.3020</h2></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;
