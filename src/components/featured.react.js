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
    //refs
    const featuredContent = useRef(HTMLElement);
    const featuredInfo = useRef(HTMLElement);
    const featuredInfoLine = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);


    const getActiveTL = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: featuredContent.current,
                markers: false,
                pin: false, // pin the trigger element while active
                start: () => {
                    const containerHeight = featuredContent.current.getBoundingClientRect().height;
                    const windowHeight = window.innerHeight;
                    const offset = (windowHeight - containerHeight) / 2;
                    const start = "top " + offset;
                    return start;
                }, // when the top of the trigger hits the top of the viewport
                end: '+=500 +=500',// end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                snap: {
                    snapTo: 'labels', // snap to the closest label in the timeline
                    duration: { min: 0.2, max: 1 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                    ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
                }
            }
        });
        tl.addLabel('Start')
            .from(featuredInfo.current, { scale: 0.3, autoAlpha: 0 })
            .addLabel('Active')
        // .to(featuredInfo.current, { scale: 0.3, autoAlpha: 0 })
        // .addLabel('Inactive')

        return tl;
    }


    //interactions 
    useLayoutEffect(() => {
        //gsap animations
        const ctx = gsap.context(() => {
            getActiveTL();
        })

        return () => {
            ctx.revert();
        };
    }, [])


    useLayoutEffect(() => {




    }, []);



    return (
        <div className='featured'>
            <div className='featured-container'>
                <div ref={featuredContent} className='featured-content'>

                    <div className='featured-card'>
                        <Link to={href}>
                            <img className='about-headshot' key={Media[media].key} src={Media[media].src} />
                        </Link>
                    </div>

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