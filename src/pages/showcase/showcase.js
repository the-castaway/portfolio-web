import { React, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
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
    let showcaseContainer = useRef(null);
    let showcaseContent = useRef(HTMLElement);
    let showcaseHeader = useRef(HTMLElement);
    let showcaseCarouselContainer = useRef(HTMLElement);
    let showcaseCarouselCards = useRef(HTMLElement);
    let showcaseCarouselDragProxy = useRef(null);

    //plugins
    gsap.registerPlugin(SplitText, Draggable, ScrollTrigger, ScrollSmoother);




    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
            }
        });
        gsap.set(items, { x: 0 });
        totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
            vars = vars || {};
            (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
            let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
            if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            curIndex = newIndex;
            vars.overwrite = true;
            return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex + 1, vars);
        tl.previous = vars => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
        }
        return tl;
    }

    useEffect(() => {
        // //get initial carousel width
        // const getCarouselWidth = () => {
        //     let carouselWidth = 0;
        //     if (!showcaseCarouselContainer) { return }
        //     const showcaseCarouselChildren = gsap.utils.toArray(showcaseCarouselContainer.children);
        //     showcaseCarouselChildren.forEach((showcaseCarouselChild) => {
        //         carouselWidth += showcaseCarouselChild.offsetWidth;
        //     });
        //     return carouselWidth;
        // }

        // const getCarouselTravel = () => {
        //     if (!showcaseCarouselCards) { return }
        //     const showcaseCarouselTravel = showcaseCarouselCards.offsetWidth;
        //     return showcaseCarouselTravel;
        // }

        // //fill width of screen with clones
        // const fillCarouselContainer = () => {
        //     ScrollTrigger.refresh(true);
        //     if (!showcaseCarouselContainer) { return }
        //     const showcaseCarouselChildren = gsap.utils.toArray(showcaseCarouselContainer.children);
        //     let fill = Math.max(2, Math.floor((window.innerWidth * 1.5) / getCarouselWidth()));
        //     for (let i = 1; i <= fill; i++) {
        //         if (showcaseCarouselChildren.length < fill) {
        //             const showcaseCarouselCardsClone = showcaseCarouselCards.cloneNode(true);
        //             showcaseCarouselContainer.append(showcaseCarouselCardsClone);
        //         }
        //     }
        // }

        // //trigger initial clones
        // fillCarouselContainer();

        // const carouselTL = gsap.timeline();
        // carouselTL.to(showcaseCarouselContainer.children, {
        //     x: () => -(getCarouselTravel()),
        //     immediateRender: false,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: showcaseContainer,
        //         pin: true,
        //         scrub: true,
        //         end: "+=3000",
        //         markers: false,
        //         invalidateOnRefresh: false,
        //     }
        // });

        // ScrollTrigger.create({
        //     id: "showcaseTrigger",
        //     immediateRender: false,
        //     markers: false,
        //     start: 20,
        //     end: () => ScrollTrigger.maxScroll(window) - 1,
        //     refreshPriority: -100, // always update last
        //     onLeave: self => {
        //         self.scroll(self.start + 1);
        //         ScrollTrigger.update();
        //     },
        //     onLeaveBack: self => {
        //         self.scroll(self.end - 1);
        //         ScrollTrigger.update();
        //     }
        // });

        // ScrollTrigger.addEventListener("refreshInit", () => {
        //     fillCarouselContainer();
        // });
        // return () => {
        //     if (ScrollTrigger.getById("showcaseTrigger")) {
        //         ScrollTrigger.getById("showcaseTrigger").kill();
        //     }
        // }

        const scrollingCards = gsap.utils.toArray(showcaseCarouselCards.children);

        const tl = horizontalLoop(scrollingCards, {
            repeat: -1,
        });

        Observer.create({
            onChangeY(self) {
                let factor = 2.5;
                if (self.deltaY < 0) {
                    factor *= -1;
                }
                gsap.timeline({
                    defaults: {
                        ease: "none",
                    }
                })
                    .to(tl, { timeScale: factor * 2.5, duration: 0.2 })
                    .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
            }
        });



    }, []);


    return (
        <div id="showcase" className='showcase'>
            <div ref={el => showcaseContainer = el} className='showcase-container'>
                <div ref={el => showcaseContent = el} className='showcase-content'>
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
                    </div>
                    <div className='showcase-project-container'>
                        <h2 className='showcase-project-number'>
                            ----016
                        </h2>
                    </div>
                </div>
                <div className='showcase-info-container'>
                    <Instruction />
                    <Location />
                </div>
            </div>
            <div ref={el => showcaseCarouselDragProxy = el} className='showcase-carousel-drag-proxy' />

        </div >

    );
}

export default Showcase;





