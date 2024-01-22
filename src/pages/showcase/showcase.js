import { React, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import {
    Link,
    Outlet,
} from "react-router-dom"
//components
//import Location from '../../components/location.react';
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
    //state
    //const [spacer, setSpacer] = useState(10000 / window.innerWidth);
    const [invalidateOnRefresh, setInvalidateOnRefresh] = useState(true);
    //plugins
    gsap.registerPlugin(SplitText, Draggable, ScrollTrigger, ScrollSmoother);




    //----------------------------------------------------------------------------------

    // //carousel trigger
    // useEffect(() => {

    //     const handleCarousel = () => {

    //         console.log(location.pathname)
    //         if (location.pathname !== "/showcase" || !showcaseCarouselCards) { return }
    //         //iteration
    //         let iteration = 0;
    //         //card setup
    //         gsap.set(showcaseCarouselCards.children, { x: '100vw' });
    //         const cards = gsap.utils.toArray(showcaseCarouselCards.children);
    //         //const spacing = (showcaseCarouselCards.children[0].getBoundingClientRect().width - (window.innerWidth * 0.01)) / window.innerWidth;
    //         const spacing = 0.22;

    //         //timeline setup
    //         const sideScrollTimeline = element => {
    //             const sideScrollTL = gsap.timeline();
    //             sideScrollTL.fromTo(
    //                 element,
    //                 {
    //                     x: '100vw'
    //                 },
    //                 {
    //                     x: '-25vw',
    //                     duration: 1,
    //                     ease: "none",
    //                     immediateRender: false
    //                 }, 0);
    //             return sideScrollTL;
    //         };

    //         //loop logic
    //         const buildSeamlessLoop = (cards, spacing, sideScrollTimeline) => {
    //             const overlap = Math.ceil(1 / spacing);
    //             const startTime = cards.length * spacing + 0.5;
    //             const loopTime = (cards.length + overlap) * spacing + 1;
    //             const rawSequenceTL = gsap.timeline({ paused: true })
    //             const seamlessLoopTL = gsap.timeline({
    //                 paused: true,
    //                 repeat: -1,
    //             });
    //             const l = cards.length + overlap * 2;
    //             let time;
    //             let i;
    //             let index;

    //             console.log(cards.length, overlap, l)
    //             for (i = 0; i < l; i++) {
    //                 index = i % cards.length;
    //                 time = i * spacing;
    //                 rawSequenceTL.add(sideScrollTimeline(cards[index]), time);
    //                 i <= cards.length && seamlessLoopTL.add("label" + i, time);
    //             }

    //             //tween time within rawSequenceTL
    //             rawSequenceTL.time(startTime);
    //             seamlessLoopTL
    //                 .to(
    //                     rawSequenceTL,
    //                     {
    //                         time: loopTime,
    //                         duration: loopTime - startTime,
    //                         ease: "none"
    //                     })
    //                 .fromTo(
    //                     rawSequenceTL,
    //                     {
    //                         time: overlap * spacing + 1
    //                     },
    //                     {
    //                         time: startTime,
    //                         duration: startTime - (overlap * spacing + 1),
    //                         immediateRender: false,
    //                         ease: "none"
    //                     });
    //             return seamlessLoopTL;
    //         }

    //         //trigger loop logic
    //         const seamlessLoop = buildSeamlessLoop(cards, spacing, sideScrollTimeline);

    //         const playhead = { offset: 0 };
    //         const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
    //         const scrub = gsap.to(playhead, {
    //             offset: 0,
    //             onUpdate() {
    //                 seamlessLoop.time(wrapTime(playhead.offset));
    //             },
    //             duration: 1,
    //             ease: "power3",
    //             paused: true
    //         });

    //         //wrap setup
    //         const wrap = (iterationDelta, scrollTo) => {
    //             iteration += iterationDelta;
    //             trigger.scroll(scrollTo);
    //             trigger.update();
    //         }

    //         //scroll trigger setup
    //         const trigger = ScrollTrigger.create({
    //             id: "showcaseTrigger",
    //             start: 0,
    //             onUpdate(self) {
    //                 let scroll = self.scroll();
    //                 if (scroll > self.end - 1) {
    //                     wrap(1, 2);
    //                 } else if (scroll < 1 && self.direction < 0) {
    //                     wrap(-1, self.end - 2);
    //                 } else {
    //                     scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration();
    //                     scrub.invalidate().restart();
    //                 }
    //             },
    //             end: "=+3000",
    //             pin: showcaseContainer,
    //         });

    //         ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset));

    //         //scroll trigger setup
    //         const progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end);
    //         const snapTime = gsap.utils.snap(spacing);
    //         // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
    //         const scrollToOffset = (offset) => {
    //             let snappedTime = snapTime(offset),
    //                 progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration(),
    //                 scroll = progressToScroll(progress);
    //             if (progress >= 1 || progress < 0) {
    //                 return wrap(Math.floor(progress), scroll);
    //             }
    //             //if (location.pathname === "/showcase") { trigger.scroll(scroll); }

    //         }

    //         //below is the dragging functionality (mobile-friendly too)...
    //         Draggable.create(showcaseCarouselDragProxy, {
    //             type: "x",
    //             trigger: showcaseCarouselCards,
    //             onPress() {
    //                 this.startOffset = scrub.vars.offset;
    //             },
    //             onDrag() {
    //                 scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
    //                 scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
    //             },
    //             onDragEnd() {
    //                 scrollToOffset(scrub.vars.offset);
    //             }
    //         });
    //     }

    //     handleCarousel();

    //     return () => {
    //         handleCarousel();
    //         console.log('return');
    //         if (ScrollTrigger.getById("showcaseTrigger")) {
    //             ScrollTrigger.getById("showcaseTrigger").kill();
    //         }
    //     }

    // }, [location.pathname]);


    // //handle resizing
    // useEffect(() => {
    //     const handleReszie = () => {
    //         const minSpacer = 0.12;
    //         const variableSpacer = ((window.innerWidth * .25) + 20) / window.innerWidth;
    //         const spacer = Math.min(minSpacer, variableSpacer);
    //         setSpacer(spacer)

    //     };
    //     // window.addEventListener('resize', () => carousel());
    //     // return () => {
    //     //     window.removeEventListener('resize', () => carousel());
    //     // }
    // });

    //----------------------------------------------------------------------------------



    // const getCarouselWidth = () => {
    //     let carouselWidthCalc = 0;
    //     const cards = gsap.utils.toArray(showcaseCarouselCards.children);
    //     cards.forEach((card) => {
    //         carouselWidthCalc += card.offsetWidth;
    //     });
    //     setCarouselWidth(carouselWidthCalc)

    // }

    useEffect(() => {

        setInvalidateOnRefresh(true);

        //get initial carousel width
        const getCarouselWidth = () => {
            if (!showcaseCarouselCards) { return }
            const showcaseCarouselWidthCalc = showcaseCarouselCards.offsetWidth;
            return showcaseCarouselWidthCalc;
        }

        //fill width of screen with clones
        const fillCarouselContainer = () => {
            let fill = Math.floor((window.innerWidth * 1.5) / getCarouselWidth());

            for (let i = 0; i <= fill; i++) {
                const showcaseCarouselCardsClone = showcaseCarouselCards.cloneNode(true);
                showcaseCarouselContainer.append(showcaseCarouselCardsClone);
            }
        }

        //trigger initial clones
        fillCarouselContainer();


        const carouselTL = gsap.timeline();
        carouselTL.to(showcaseCarouselContainer.children, {
            x: () => -(getCarouselWidth()),
            immediateRender: false,
            ease: "none",
            scrollTrigger: {
                trigger: showcaseContainer,
                pin: true,
                scrub: true,
                end: "+=3000",
                markers: false,
                invalidateOnRefresh: false,
            }
        });

        ScrollTrigger.create({
            id: "showcaseTrigger",
            immediateRender: false,
            markers: false,
            start: 20,
            end: () => ScrollTrigger.maxScroll(window) - 1,
            refreshPriority: -100, // always update last
            onLeave: self => {
                self.scroll(self.start + 1);
                ScrollTrigger.update();
            },
            onLeaveBack: self => {
                self.scroll(self.end - 1);
                ScrollTrigger.update();
            }
        });

        ScrollTrigger.addEventListener("refreshInit", () => {
            fillCarouselContainer();
            ScrollTrigger.update();
            console.log(carouselTL);
        });

        return () => {

            console.log('return');
            setInvalidateOnRefresh(false)
            if (ScrollTrigger.getById("showcaseTrigger")) {
                ScrollTrigger.getById("showcaseTrigger").kill();
            }
        }

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
            </div>
            <div ref={el => showcaseCarouselDragProxy = el} className='showcase-carousel-drag-proxy' />

        </div >

    );
}

export default Showcase;





