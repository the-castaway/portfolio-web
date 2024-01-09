import { React, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { Observer } from "gsap/Observer";
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

const Showcase = ({ location }) => {
    //refs
    let showcase = useRef(null);
    let showcaseHeader = useRef(HTMLElement);
    let showcaseCarouselContainer = useRef(HTMLElement);
    let showcaseCarouselCards = useRef(HTMLElement);
    let showcaseCarouselDragProxy = useRef(null);
    //plugins
    gsap.registerPlugin(SplitText, Draggable, ScrollTrigger);


    // START CONST 
    //intro animations
    useEffect(() => {

        let iteration = 0;
        gsap.set(showcaseCarouselCards.children, { xPercent: 400 });
        const spacing = 0.132;
        const snapTime = gsap.utils.snap(spacing);
        // we'll use this to snapTime the playhead on the seamlessLoop
        const cards = gsap.utils.toArray(showcaseCarouselCards.children);
        const animateFunc = element => {
            const tl = gsap.timeline();
            tl.fromTo(element, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0);
            return tl;
        };

        const buildSeamlessLoop = (items, spacing, animateFunc) => {
            let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
                startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
                loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime
                rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
                seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
                    paused: true,
                    repeat: -1, // to accommodate infinite scrolling/looping
                    onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                        this._time === this._dur && (this._tTime += this._dur - 0.01);
                    }
                }),
                l = items.length + overlap * 2,
                time, i, index;

            // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
            for (i = 0; i < l; i++) {
                index = i % items.length;
                time = i * spacing;
                rawSequence.add(animateFunc(items[index]), time);
                // i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
            }

            // here's where we set up the scrubbing of the playhead to make it appear seamless.
            rawSequence.time(startTime);
            seamlessLoop.to(rawSequence, {
                time: loopTime,
                duration: loopTime - startTime,
                ease: "none"
            }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
                time: startTime,
                duration: startTime - (overlap * spacing + 1),
                immediateRender: false,
                ease: "none"
            });
            return seamlessLoop;
        }

        const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
        const trigger = ScrollTrigger.create({
            id: "showcaseTrigger",
            start: 0,
            onUpdate(self) {
                let scroll = self.scroll();
                if (scroll > self.end - 1) {
                    wrap(1, 2);
                } else if (scroll < 1 && self.direction < 0) {
                    wrap(-1, self.end - 2);
                } else {
                    scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
                    scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
                }
            },
            end: "=+3000",
            pin: showcaseCarouselContainer,
        });

        const wrap = (iterationDelta, scrollTo) => {
            iteration += iterationDelta;
            trigger.scroll(scrollTo);
            trigger.update(); // by default, when we trigger.scroll(), it waits 1 tick to update().
        };


        const progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
        const playhead = { offset: 0 }; // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()); // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
        const scrub = gsap.to(playhead, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
            offset: 0,
            onUpdate() {
                seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
            },
            duration: 0.5,
            ease: "power3",
            paused: true
        });

        const scrollToOffset = (offset) => { // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
            let snappedTime = snapTime(offset),
                progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration(),
                scroll = progressToScroll(progress);
            if (progress >= 1 || progress < 0) {
                return wrap(Math.floor(progress), scroll);
            }
            trigger.scroll(scroll);
        }


        //below is the dragging functionality (mobile-friendly too)...
        Draggable.create(showcaseCarouselDragProxy, {
            type: "x",
            trigger: showcaseCarouselCards,
            onPress() {
                this.startOffset = scrub.vars.offset;
            },
            onDrag() {
                scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
                scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
            },
            onDragEnd() {
                scrollToOffset(scrub.vars.offset);
            }
        });

    }, []);



    // //parallax animation
    // const mouseAnimation = (event) => {
    //     let xPos = event.clientX / window.innerWidth - 0.5,
    //         yPos = event.clientY / window.innerHeight - 0.5;

    //     if (showcaseCarouselCards.current) {
    //         for (let i = 0; i < showcaseCarouselCards.children; i++) {
    //             console.log(showcaseCarouselCards.children)
    //             const parallaxTL = gsap.timeline();
    //             // parallaxTL.to(showcaseCarouselCards.children[i].children[0], {
    //             //     duration: 0.5,
    //             //     rotationY: xPos * 50,
    //             //     rotationX: yPos * -50,
    //             //     rotate: xPos * 40,
    //             //     y: yPos * 400,
    //             //     x: xPos * 400,
    //             // }, 0)

    //             // i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
    //         }
    //     }
    // }

    // //parallax trigger
    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         mouseAnimation(event);
    //     };
    //     window.addEventListener('mousemove', (event) => handleMouseMove(event));
    //     return () => {
    //         window.removeEventListener('mousemove', (event) => handleMouseMove(event));
    //     }
    // });

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
            <div ref={el => showcaseCarouselContainer = el} className='showcase-carousel-container'>
                <div ref={el => showcaseCarouselCards = el} className='showcase-carousel-cards'>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
                        </div>
                    </div>
                    <div className='showcase-carousel-card-container'>
                        <div className='showcase-carousel-card'>
                            <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
                        </div>
                    </div>

                </div>
                {/* <Link to="project1">
                    Project 1
                </Link>
                <Link to="project2">
                    Project 2
                </Link> */}
            </div>
            <div ref={el => showcaseCarouselDragProxy = el} className='showcase-carousel-drag-proxy' />
            {/* <div className='showcase-project-container'>
                <h2 className='showcase-project-number'>
                    ----016
                </h2>
            </div>
            <div className='showcase-info-container'>
                <div className='showcase-info-footer'>
                    <Instruction />
                    <Location />
                </div>
            </div> */}
            {/* <Outlet /> */}
        </div>

    );
}

export default Showcase;














