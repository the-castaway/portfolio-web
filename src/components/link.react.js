import React, { useEffect, useLayoutEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
//styles
import '../styles/link.css';
import '../styles/App.css';

const Link = ({ header, description }) => {
    const mediaQuery = useMemo(() => window.matchMedia(`(max-width: 600px)`), [`(max-width: 600px)`])
    const [matches, setMatches] = useState(mediaQuery.matches);
    const link = useRef(HTMLElement);
    const linkIcon = useRef(HTMLElement);
    const linkIconBorder = useRef(HTMLElement);
    const linkIconText = useRef(HTMLElement);
    const linkIconVector = useRef(HTMLElement);

    useLayoutEffect(() => {
        const linkTL = gsap.timeline();
        linkTL.pause();
        linkTL.fromTo(
            linkIcon.current,
            {
                duration: 0.3,
                width: () => { return matches ? 35 : 58 },
                ease: "ease",
            },
            {
                duration: 0.3,
                width: () => { return "auto" },
                ease: "ease",
            },
            0);
        linkTL.to(linkIconVector.current, {
            duration: 0.3,
            rotate: "45deg",
            ease: "ease",
        }, 0);
        linkTL.to(linkIconText.current, {
            duration: 0.3,
            opacity: 1,
            ease: "ease",
            delay: 0.2,
        }, 0);
        link.current.addEventListener('mouseenter', () => { linkTL.play(); })
        link.current.addEventListener('mouseleave', () => { linkTL.reverse(); })
    }, [matches]);

    useEffect(() => {
        const onMediaChange = () => {
            setMatches(mediaQuery.matches);
            mediaQuery.addEventListener("change", onMediaChange);
        }
        window.matchMedia(`(max-width: 600px)`).addEventListener('change', onMediaChange);
    }, [mediaQuery]);


    return (
        <div className='link' ref={link}>
            <div className='link-header'>
                {header}
            </div>
            <div ref={linkIcon} className="link-icon" style={{ width: matches ? 35 : 58 }}>
                <div ref={linkIconBorder} className="link-icon-border" />
                <div ref={linkIconVector} className="link-icon-vector">
                    <svg height={matches ? 10 : 20} width={matches ? 10 : 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.03906 1.05957H18.9378V18.9571" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M1.03906 18.9571L18.9378 1.05957" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                    </svg>
                </div>
                <div>
                    <p ref={linkIconText} className="link-icon-text">
                        {description}
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Link;