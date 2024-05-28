import React, { useLayoutEffect, useRef, useState } from "react";
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
    const navModal = useRef(HTMLElement);
    const navModalShowcase = useRef(HTMLElement);
    const navModalAbout = useRef(HTMLElement);
    const navModalLab = useRef(HTMLElement);
    const navModalContact = useRef(HTMLElement);
    const navButton = useRef(HTMLElement);
    const navButtonBorder = useRef(HTMLElement);
    const navButtonText = useRef(HTMLElement);
    const navButtonIcon = useRef(HTMLElement);
    const navButtonIconLine = useRef(HTMLElement);
    const navTitle = useRef(HTMLElement);
    const navTitleDefault = useRef(HTMLElement);
    const navTitleHover = useRef(HTMLElement);

    //handle initial logic
    useLayoutEffect(() => {
        //title
        const titleTL = gsap.timeline(),
            navTitleDefaultSplit = new SplitText(navTitleDefault.current, { type: "chars" }),
            navTitleHoverSplit = new SplitText(navTitleHover.current, { type: "chars" }),
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

        navTitle.current.addEventListener('mouseenter', () => { titleTL.play() })
        navTitle.current.addEventListener('mouseleave', () => { titleTL.reverse() })

        //button
        const buttonTL = gsap.timeline();
        buttonTL.pause();

        buttonTL.to(navButtonBorder.current, {
            duration: 0.2,
            ease: "ease",
            width: '120px',
        }, 0);
        buttonTL.from(navButtonText.current, {
            duration: 0.2,
            opacity: 0,
            ease: "ease",
            delay: 0.05,
        }, 0);

        navButton.current.addEventListener('mouseenter', () => { buttonTL.play() })
        navButton.current.addEventListener('mouseleave', () => { buttonTL.reverse() })

    }, []);

    //handle nav modal on expand
    const expandModal = () => {
        setCollapsed(false);
        const modalTL = gsap.timeline();
        modalTL.to(navModal.current, {
            duration: 0.2,
            opacity: 1,
            display: 'flex',
        }, 0)
        modalTL.to(navButtonIcon.current, {
            duration: 0.4,
            rotate: 0,
        }, 0)
        modalTL.to(navButtonIconLine.current, {
            duration: 0.4,
            rotate: -90,
        }, 0)
        modalTL.from(navModalShowcase.current, {
            duration: 0.3,
            y: '25%',
            opacity: 0,
            ease: "ease",
            delay: 0.2,
        }, 0)
        modalTL.from(navModalAbout.current, {
            duration: 0.3,
            y: '25%',
            opacity: 0,
            ease: "ease",
            delay: 0.3,
        }, 0)
        modalTL.from(navModalLab.current, {
            duration: 0.3,
            y: '25%',
            opacity: 0,
            ease: "ease",
            delay: 0.4,
        }, 0)
        modalTL.from(navModalContact.current, {
            duration: 0.3,
            y: '25%',
            opacity: 0,
            ease: "ease",
            delay: 0.5,
        }, 0)
    }

    //handle nav modal on collapse
    const collapseModal = () => {
        if (collapsed === false) {
            setCollapsed(true);
            const modalTL = gsap.timeline();
            modalTL.to(navModal.current, {
                duration: 0.2,
                opacity: 0,
                display: 'none',
            }, 0)
            modalTL.to(navButtonIcon.current, {
                duration: 0.4,
                rotate: 90,
            }, 0)
            modalTL.to(navButtonIconLine.current, {
                duration: 0.4,
                rotate: 0,
            }, 0)
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
            <nav id="nav" className='nav'>
                <NavLink ref={navTitle} onClick={() => { collapseModal(); }} to="/" exact='true' className='nav-title'>
                    <div ref={navTitleDefault} className="nav-title-default">
                        JC
                    </div>
                    <div ref={navTitleHover} className="nav-title-hover">
                        Jaime Castaneda
                    </div>
                </NavLink>
                <a ref={navButton} className="nav-button" onClick={() => { toggleModal(); }} >
                    <div ref={navButtonBorder} className="nav-button-border" />
                    <div ref={navButtonText} className="nav-button-text">
                        <p>
                            Menu
                        </p>
                    </div>
                    <div ref={navButtonIcon} className="nav-button-icon">
                        <div className="nav-button-icon-horizontal" />
                        <div ref={navButtonIconLine} className="nav-button-icon-vertical" />
                    </div>
                </a>
            </nav>
            <div ref={navModal} className="nav-modal">
                <div className="nav-modal-links">
                    <NavLink ref={navModalShowcase} onClick={() => { collapseModal(); }} to="/showcase" exact='true'>
                        <Link header={'Showcase'} description={"Let's get it"} />
                    </NavLink>
                    <NavLink ref={navModalAbout} onClick={() => { collapseModal(); }} to="/about" exact='true'>
                        <Link header={'About'} description={"Who is Jaime?"} />
                    </NavLink>
                    <NavLink ref={navModalLab} onClick={() => { collapseModal(); }} to="/lab" exact='true'>
                        <Link header={'Lab'} description={"Let's explore"} />
                    </NavLink>
                </div>
                <div className="nav-modal-contact" ref={navModalContact} >
                    <h2 className="nav-modal-contact-header">
                        [ Let's Connect ]
                    </h2>
                    <div className="nav-modal-contact-links">
                        <div className="nav-modal-contact-info">
                            <h4>
                                Locale
                            </h4>
                            <p>
                                SF Bay Area
                            </p>
                        </div>
                        <div href="mailto:jccd.designs@gmail.com" className="nav-modal-contact-info">
                            <h4>
                                Socials
                            </h4>
                            <p>
                                @the_casta_way
                            </p>
                        </div>
                        <a href="tel:408-828-3020" className="nav-modal-contact-link">
                            <h4>
                                Phone
                            </h4>
                            <p>
                                +1 408 828 3020
                            </p>
                        </a>
                        <a href="mailto:jccd.designs@gmail.com" className="nav-modal-contact-link">
                            <h4>
                                Email
                            </h4>
                            <p>
                                hello@jaimecastaneda.com
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
