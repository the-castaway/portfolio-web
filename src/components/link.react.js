import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//styles
import '../styles/link.css';
import '../styles/App.css';

const Link = ({ header, description }) => {
    gsap.registerPlugin(SplitText);
    let link = useRef(null);
    let linkIcon = useRef(null);
    let linkIconBorder = useRef(null);
    let linkIconText = useRef(null);
    let linkIconVector = useRef(null);


    useEffect(() => {
        const linkTL = gsap.timeline();
        linkTL.pause();

        linkTL.to(linkIcon, {
            duration: 0.3,
            width: () => { return 'auto' },
            ease: "ease",
        }, 0);
        linkTL.to(linkIconVector, {
            duration: 0.3,
            rotate: "45deg",
            ease: "ease",
        }, 0);
        linkTL.to(linkIconText, {
            duration: 0.3,
            opacity: 1,
            ease: "ease",
            delay: 0.2,
        }, 0);
        link.addEventListener('mouseenter', () => { linkTL.play(); })
        link.addEventListener('mouseleave', () => { linkTL.reverse() })
    }, []);

    return (
        <div className='link' ref={el => link = el}>
            <div className='link-header'>
                {header}
            </div>
            <div ref={el => linkIcon = el} className="link-icon"  >
                <div ref={el => linkIconBorder = el} className="link-icon-border" />
                <div ref={el => linkIconVector = el} className="link-icon-vector">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.03906 1.05957H18.9378V18.9571" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                        <path d="M1.03906 18.9571L18.9378 1.05957" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                    </svg>
                </div>
                <div>
                    <p ref={el => linkIconText = el} className="link-icon-text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Link;