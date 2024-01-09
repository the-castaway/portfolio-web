import { React, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Link,
    Outlet,
} from "react-router-dom"
//components
import Location from '../../components/location.react';
import Instruction from '../../components/instruction.react';
//styles
import '../../styles/home.css';
import '../../styles/showcase.css';
//assets
import { Media } from "../../media/media";

const Showcase = () => {
    //refs
    let showcase = useRef(null);
    let showcaseHeader = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(SplitText, Draggable, ScrollTrigger);

    console.log(SplitText, Draggable, ScrollTrigger)


    useEffect(() => {
        let ctx = gsap.context(() => {
            //define timeline
            const showcaseTL = gsap.timeline(),
                showcaseHeaderSplit = new SplitText(showcaseHeader, { type: "chars" }),
                showcaseHeaderChars = showcaseHeaderSplit.chars;
            showcaseTL.pause();

            showcaseTL.to(showcaseHeaderChars, {
                duration: 0.5,
                opacity: 1,
                y: 0,
                ease: "ease",
                stagger: 0.05
            });
            showcaseTL.play();
        })

    }, []);

    return (
        <div id="showcase" ref={el => showcase = el}>
            <div className='showcase-header-container'>
                <h1 ref={el => showcaseHeader = el} className='showcase-header'>
                    Showcase
                </h1>
                <div className='showcase-header-ui'>
                    <p>
                        Carousel - List
                    </p>
                </div>
            </div>
            <div className='showcase-carousel-container'>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                <div className='showcase-carousel-card-container'>
                    <div className='showcase-carousel-card'>
                        <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                    </div>
                </div>
                {/* <Link to="project1">
                    Project 1
                </Link>
                <Link to="project2">
                    Project 2
                </Link> */}
            </div>
            <div className='showcase-project-container'>
                <h2 className='showcase-project-number'>
                    ----016
                </h2>
            </div>
            <div className='showcase-info-container'>
                <div className='showcase-info-footer'>
                    <Instruction />
                    <Location />
                </div>
            </div>
            {/* <Outlet /> */}
        </div>

    );
}

export default Showcase;














