import { React, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import {
    Link
} from "react-router-dom"
//styles
import '../styles/featured.css';
//assets
import { Media } from "../media/media";

const Featured = ({ children, number, href, media }) => {
    //state
    const [enabled, setEnabled] = useState(false);
    //refs
    const featuredContent = useRef(HTMLElement);
    const featuredCard = useRef(HTMLElement);
    const featuredInfo = useRef(HTMLElement);
    const featuredInfoLine = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);

    //mouse move parallax animation timeline
    const getMouseMoveTL = (event) => {
        let xPos = event.clientX / window.innerWidth - 0.5,
            yPos = event.clientY / window.innerHeight - 0.5;
        const tl = gsap.timeline();
        tl.to(featuredCard.current, {
            duration: 0.5,
            rotationY: xPos * 5,
            rotationX: yPos * -5,
            rotationZ: xPos * 5,
            y: yPos * 50,
            x: xPos * 50,
        }, 0)
        tl.to(featuredInfo.current, {
            duration: 0.5,
            rotate: xPos * 5,
        }, 0)
        return tl;
    }

    const getActiveTL = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: featuredContent.current,
                markers: false,
                pin: false, // pin the trigger element while active
                start: 'bottom bottom',
                end: () => {
                    const containerHeight = featuredContent.current.getBoundingClientRect().height;
                    const windowHeight = window.innerHeight;
                    const offset = (windowHeight - containerHeight) / 2;
                    const endOffset = windowHeight - offset
                    const end = "bottom " + endOffset;
                    return "bottom 90%";
                },
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // snap: {
                //     snapTo: 'labels', // snap to the closest label in the timeline
                //     duration: { min: 0.2, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                //     ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
                // }

            }
        });
        tl.from(featuredInfo.current, { scale: 0.3, autoAlpha: 0, delay: 0.2 }, 0)
            .from(featuredCard.current, {
                scale: 0.8, autoAlpha: 0.6, onComplete: () => {
                    setEnabled(true);
                },
            }, 0)
            .addLabel('Active')
        return tl;
    }

    //intro 
    useLayoutEffect(() => {
        //gsap animations
        const ctx = gsap.context(() => {
            getActiveTL();
        })

        return () => {
            ctx.revert();
        };
    }, [])

    //interactions 
    useLayoutEffect(() => {
        //gsap animations
        const ctx = gsap.context((context) => {
            context.add('mouseMoveAnim', (event) => {
                getMouseMoveTL(event);
            })
        })
        const handleMouseMove = (event) => {
            if (!enabled) return;
            ctx.mouseMoveAnim(event)
        };
        //add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            ctx.revert();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [enabled])

    return (
        <div className='featured'>
            <div className='featured-container'>
                <div ref={featuredContent} className='featured-content'>
                    <Link to={href} ref={featuredCard} className='featured-card'>
                        <img className='about-headshot' key={Media[media].key} src={Media[media].src} />
                    </Link>
                    <div ref={featuredInfo} className='featured-info'>
                        <div className='featured-info-number'>
                            <h1>Pr. {number}<br />/ 016</h1>
                        </div>
                        <div ref={featuredInfoLine} className='featured-info-line' />
                        <div className='featured-info-text' >
                            <h4>
                                Info
                            </h4>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Featured;