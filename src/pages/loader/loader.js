import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
//components
import Footer from '../../components/footer.react';
//styles
import '../../styles/loader.css';

const TIME = 4;

const Loader = ({ location }) => {
    //refs
    const loaderCounter = useRef(HTMLElement);
    const loaderHeaderLeft = useRef(HTMLElement);
    const loaderHeaderRight = useRef(HTMLElement);
    const loaderLine = useRef(HTMLElement);
    const loaderFooter = useRef(HTMLElement);
    //initialize gsap plugins
    gsap.registerPlugin(SplitText);
    //counter 
    let counter = {
        val: 0
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //define timeline
            const tl = gsap.timeline();
            //intro animation
            tl.from(loaderCounter.current, {
                duration: 0.5,
                opacity: 0,
                ease: "ease",
            }, 0);
            tl.from(loaderFooter.current, {
                duration: 0.5,
                opacity: 0,
                ease: "ease",
            }, 0);
            tl.from(loaderHeaderLeft.current, {
                duration: 0.5,
                xPercent: 25,
                opacity: 0,
            }, 0)
            tl.from(loaderLine.current, {
                duration: 0.5,
                width: 0,
                opacity: 0,
            }, 0)
            tl.from(loaderHeaderRight.current, {
                duration: 0.5,
                xPercent: -25,
                opacity: 0,
            }, 0)
            //counter animation
            tl.to(counter, {
                duration: TIME,
                val: 100,
                onUpdate() {
                    let counterVal = Math.ceil(counter.val)
                    if (counter.val <= 9) {
                        loaderCounter.current.textContent = '00' + counterVal;
                    }
                    else if (counter.val <= 99 && counter.val >= 9) {
                        loaderCounter.current.textContent = '0' + counterVal;
                    }
                    else {
                        loaderCounter.current.textContent = counterVal;
                    }
                },
                ease: 'power3.inOut',
                delay: -0.2,
            }, 1);
            //exit animation
            tl.to(loaderHeaderLeft.current, {
                duration: 0.5,
                transform: () => {
                    if (location.pathname === '/') {
                        return 'scale(1)'
                    }
                    else { return 'scale(0.8)' }
                },
                xPercent: () => {
                    if (location.pathname === '/') {
                        return 0
                    }
                    else { return 25 }
                },
                opacity: () => {
                    if (location.pathname === '/') {
                        return 1
                    }
                    else { return 0 }
                },
                ease: "ease",
                delay: 2.5,
            }, 2);
            tl.to(loaderHeaderRight.current, {
                duration: 0.5,
                transform: () => {
                    if (location.pathname === '/') {
                        return 'scale(1)'
                    }
                    else { return 'scale(0.8)' }
                },
                xPercent: () => {
                    if (location.pathname === '/') {
                        return 0
                    }
                    else { return -25 }
                },
                opacity: () => {
                    if (location.pathname === '/') {
                        return 1
                    }
                    else { return 0 }
                },
                ease: "ease",
                delay: 2.5,
            }, 2);
            tl.to(loaderLine.current, {
                duration: 0.5,
                width: () => {
                    if (location.pathname === '/') {
                        return "50%"
                    }
                    else { return 0 }
                },
                ease: "ease",
                delay: 2.5,
            }, 2);
            tl.to(loaderCounter.current, {
                duration: 0.5,
                opacity: 0,
                ease: "ease",
                delay: 2.5,
            }, 2);
        })
        return () => ctx.revert();
    }, []);

    return (
        <div id="loader" className='loader'>
            <div className='loader-container'>
                <h1 className='loader-header' ref={loaderHeaderLeft}>
                    <span>
                        2024
                    </span>
                </h1>
                <div className='loader-line' ref={loaderLine} />
                <h1 className='loader-header' ref={loaderHeaderRight}>
                    <span>
                        Folio
                    </span>
                </h1>
                <p className='loader-counter'>
                    <span ref={loaderCounter}>
                        000
                    </span>
                </p>
            </div >
            <Footer instruction={"Wait"} />
        </div >
    );
}

export default Loader;
