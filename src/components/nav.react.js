import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
import Link from '../components/link.react';
//styles
import '../styles/nav.css';

const Nav = () => {
    const [collapsed, setCollapsed] = useState(true);
    gsap.registerPlugin(SplitText);
    //refs
    let nav = useRef(null);
    let navModal = useRef(null);
    let navModalShowcase = useRef(HTMLElement);
    let navModalAbout = useRef(HTMLElement);
    let navModalContact = useRef(HTMLElement);
    let navButton = useRef(null);
    let navButtonBorder = useRef(null);
    let navButtonText = useRef(null);
    let navButtonIcon = useRef(null);
    let navButtonIconLine = useRef(null);
    let navTitle = useRef(null);
    let navTitleDefault = useRef(null);
    let navTitleHover = useRef(null);

    //handle initial logic
    useEffect(() => {
        //title
        const titleTL = gsap.timeline(),
            navTitleDefaultSplit = new SplitText(navTitleDefault, { type: "chars" }),
            navTitleHoverSplit = new SplitText(navTitleHover, { type: "chars" }),
            navTitleDefaultChars = navTitleDefaultSplit.chars,
            navTitleHoverChars = navTitleHoverSplit.chars;
        titleTL.pause();

        titleTL.to(navTitleDefaultChars, {
            duration: 0.3,
            opacity: 0,
            y: '-25%',
            ease: "ease",
            stagger: 0.03,
        }, 0);
        titleTL.from(navTitleHoverChars, {
            duration: 0.3,
            opacity: 0,
            y: '25%',
            ease: "ease",
            stagger: 0.05,
            delay: 0.01,
        }, 0);

        navTitle.addEventListener('mouseenter', () => { titleTL.play() })
        navTitle.addEventListener('mouseleave', () => { titleTL.reverse() })

        //button
        const buttonTL = gsap.timeline();
        buttonTL.pause();

        buttonTL.to(navButtonBorder, {
            duration: 0.2,
            ease: "ease",
            width: '120px',
        }, 0);
        buttonTL.from(navButtonText, {
            duration: 0.2,
            opacity: 0,
            ease: "ease",
            delay: 0.05,
        }, 0);

        navButton.addEventListener('mouseenter', () => { buttonTL.play() })
        navButton.addEventListener('mouseleave', () => { buttonTL.reverse() })

    }, []);

    //handle nav modal on expand
    const expandModal = () => {
        setCollapsed(false);
        let ctx = gsap.context(() => {
            const modalTL = gsap.timeline();
            modalTL.to(navModal, {
                duration: 0.2,
                opacity: 1,
                display: 'flex',
            }, 0)
            modalTL.to(navButtonIcon, {
                duration: 0.4,
                rotate: 0,
            }, 0)
            modalTL.to(navButtonIconLine, {
                duration: 0.4,
                rotate: -90,
            }, 0)
            modalTL.from(navModalShowcase, {
                duration: 0.3,
                y: '25%',
                opacity: 0,
                ease: "ease",
                delay: 0.2,
            }, 0)
            modalTL.from(navModalAbout, {
                duration: 0.3,
                y: '25%',
                opacity: 0,
                ease: "ease",
                delay: 0.3,
            }, 0)
            modalTL.from(navModalContact, {
                duration: 0.3,
                y: '25%',
                opacity: 0,
                ease: "ease",
                delay: 0.4,
            }, 0)
        })
    }

    //handle nav modal on collapse
    const collapseModal = () => {
        if (collapsed === false) {
            setCollapsed(true);
            let ctx = gsap.context(() => {
                const modalTL = gsap.timeline();
                modalTL.to(navModal, {
                    duration: 0.2,
                    opacity: 0,
                    display: 'none',
                }, 0)
                modalTL.to(navButtonIcon, {
                    duration: 0.4,
                    rotate: 90,
                }, 0)
                modalTL.to(navButtonIconLine, {
                    duration: 0.4,
                    rotate: 0,
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
            <nav id="nav" ref={el => nav = el} className='nav'>
                <NavLink ref={el => navTitle = el} onClick={() => { collapseModal(); }} to="/" exact='true' className='nav-title'>
                    <div ref={el => navTitleDefault = el} className="nav-title-default">
                        JC
                    </div>
                    <div ref={el => navTitleHover = el} className="nav-title-hover">
                        Jaime Castaneda
                    </div>
                </NavLink>
                <div ref={el => navButton = el} className="nav-button" onClick={() => { toggleModal(); }} >
                    <div ref={el => navButtonBorder = el} className="nav-button-border" />
                    <div ref={el => navButtonText = el} className="nav-button-text">
                        <p>
                            Menu
                        </p>
                    </div>
                    <div ref={el => navButtonIcon = el} className="nav-button-icon">
                        <div className="nav-button-icon-horizontal" />
                        <div ref={el => navButtonIconLine = el} className="nav-button-icon-vertical" />
                    </div>
                </div>
            </nav>
            <div ref={el => navModal = el} className="nav-modal">
                <div className="nav-modal-links">
                    <NavLink ref={el => navModalShowcase = el} onClick={() => { collapseModal(); }} to="/showcase" exact='true'>
                        <Link header={'Showcase'} description={"Let's get it"} />
                    </NavLink>
                    <NavLink ref={el => navModalAbout = el} onClick={() => { collapseModal(); }} to="/about" exact='true'>
                        <Link header={'About'} description={"Wanna be frens?"} />
                    </NavLink>
                </div>
                <hr className="nav-modal-divider" />
                <div className="nav-modal-contact" ref={el => navModalContact = el} >
                    <h2 className="nav-modal-contact-header">
                        Let's Chat
                    </h2>
                    <div className="nav-modal-contact-links">
                        <a href="mailto:jccd.designs@gmail.com">
                            <p className="nav-modal-contact-link-email">
                                hello@jaimecastaneda.com
                            </p>
                        </a>
                        <a href="tel:408-828-3020">
                            <p className="nav-modal-contact-link-phone">
                                +1.408.828.3020
                            </p>
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Nav;
