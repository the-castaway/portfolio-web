import { React, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Link
} from "react-router-dom"
//styles
import '../styles/showcased.css';
//assets
import { ThumbnailMedia } from "../media/media";

const Showcased = ({ children, name, number, href, thumbnail }) => {
    //refs
    const showcasedContent = useRef(HTMLElement);
    const showcasedCardContainer = useRef(HTMLElement);
    const showcasedCard = useRef(HTMLElement);
    const showcasedInfoContainer = useRef(HTMLElement);
    const showcasedInfo = useRef(HTMLElement);
    const showcasedInfoLine = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);

    //mouse move parallax animation timeline
    const getMouseMoveTL = (event) => {
        let xPos = event.clientX / window.innerWidth - 0.5,
            yPos = event.clientY / window.innerHeight - 0.5;
        const tl = gsap.timeline();
        tl.to(showcasedCard.current, {
            duration: 0.5,
            rotationY: xPos * 5,
            rotationX: yPos * -5,
            rotationZ: xPos * 5,
            y: yPos * 50,
            x: xPos * 50,
            ease: "power1.Out"
        }, 0)
        tl.to(showcasedInfo.current, {
            duration: 0.5,
            rotate: xPos * 5,
            ease: "power4.Out"
        }, 0)
        return tl;
    }

    //activate timeline
    const getActiveTL = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: showcasedContent.current,
                markers: false,
                pin: false, // pin the trigger element while active
                start: 'bottom bottom',
                end: "bottom 95%",
                scrub: 1,
            }
        });
        tl.from(showcasedInfoContainer.current, {
            scale: 0.3,
            autoAlpha: 0,
            duration: 1,
            delay: 0.4
        }, 0)
            .from(showcasedCardContainer.current, {
                scale: 0.8,
                autoAlpha: 0.6,
                duration: 1,
            }, 0)
            .addLabel('Active')
        tl.progress(1).progress(0);
        return tl;
    }

    //intro 
    useLayoutEffect(() => {
        //gsap animations
        const ctx = gsap.context((context) => {
            getActiveTL();
            context.add('mouseMoveAnim', (event) => {
                getMouseMoveTL(event);
            })
        })
        const handleMouseMove = (event) => {
            ctx.mouseMoveAnim(event)
        };
        //add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            ctx.revert();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return (
        <div className='showcased'>
            <div className='showcased-container'>
                <div ref={showcasedContent} className='showcased-content'>
                    <div ref={showcasedCardContainer} className='showcased-card-container'>
                        <Link to={href} ref={showcasedCard} className='showcased-card'>
                            <img className='showcased-card-image' key={thumbnail.key} src={thumbnail.src} />
                            <div className='showcased-card-icon'>
                                <div className="showcased-card-icon-vector">
                                    <svg height={20} width={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.03906 1.05957H18.9378V18.9571" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                                        <path d="M1.03906 18.9571L18.9378 1.05957" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div ref={showcasedInfoContainer} className='showcased-info-container'>
                        <div ref={showcasedInfo} className='showcased-info'>
                            <div className='showcased-info-number'>
                                <h1>PR. {number}<br />/ 016</h1>
                            </div>
                            <div ref={showcasedInfoLine} className='showcased-info-line' />
                            <div className='showcased-info-text' >
                                <h4>
                                    Info
                                </h4>
                                <h2>
                                    <b>{name}</b>
                                </h2>
                                <ul>
                                    {children.map((child) =>
                                        <li key={child}><p>{child}</p></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Showcased;