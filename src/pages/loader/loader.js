import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
//styles
import '../../styles/loader.css';

const DURATION = 0.4;
const PERCENT_DELAY = -0.3;
const NUMBER_DELAY = 0.5;

const Loader = () => {
    //initialize gsap plugins
    gsap.registerPlugin(SplitText);

    //counter refs
    let loaderNumber100 = useRef(null);
    let loaderNumber88 = useRef(null);
    let loaderNumber22 = useRef(null);
    let loaderNumber0 = useRef(null);
    let loaderNumberPercent = useRef(null);
    //loader info refs
    let loaderInfo = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //define timeline
            const tl = gsap.timeline(),
                loaderNumber22Split = new SplitText(loaderNumber22, { type: "chars" }),
                loaderNumber88Split = new SplitText(loaderNumber88, { type: "chars" }),
                loaderNumber100Split = new SplitText(loaderNumber100, { type: "chars" }),
                chars22 = loaderNumber22Split.chars,
                chars88 = loaderNumber88Split.chars,
                chars100 = loaderNumber100Split.chars;

            tl.from(loaderNumber0, {
                duration: DURATION,
                delay: 0.5,
                opacity: 0,
                y: 100,
                ease: "ease",
            });
            tl.from(loaderNumberPercent, {
                duration: DURATION,
                delay: PERCENT_DELAY,
                opacity: 0,
                y: 100,
                rotationX: 0,
                ease: "ease",
            });
            tl.to(loaderNumber0, {
                duration: DURATION,
                delay: NUMBER_DELAY,
                opacity: 0,
                y: -100,
                ease: "ease",
            });
            tl.from(chars22, {
                duration: DURATION,
                opacity: 0,
                y: 100,
                rotationX: 0,
                ease: "ease",
                stagger: 0.1
            });
            tl.to(chars22, {
                duration: DURATION,
                delay: NUMBER_DELAY,
                opacity: 0,
                y: -100,
                rotationX: 0,
                ease: "ease",
                stagger: 0.1
            });
            tl.from(chars88, {
                duration: DURATION,
                opacity: 0,
                y: 100,
                rotationX: 0,
                ease: "ease",
                stagger: 0.1
            });
            tl.to(chars88, {
                duration: DURATION,
                delay: NUMBER_DELAY,
                opacity: 0,
                y: -100,
                rotationX: 0,
                ease: "ease",
                stagger: 0.1
            });
            tl.from(chars100, {
                duration: DURATION,
                opacity: 0,
                y: 100,
                rotationX: 0,
                ease: "ease",
                stagger: 0.1
            });
            tl.to(chars100, {
                duration: DURATION,
                delay: NUMBER_DELAY,
                opacity: 0,
                y: -100,
                rotationX: 0,
                ease: "ease",
                stagger: 0.1
            });
            tl.to(loaderNumberPercent, {
                duration: DURATION,
                delay: PERCENT_DELAY,
                opacity: 0,
                y: -100,
                ease: "ease",
            });

        })

        return () => ctx.revert();

    })

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //define timeline
            const tl = gsap.timeline();

            tl.from(loaderInfo, {
                duration: DURATION,
                delay: 0.5,
                opacity: 0,
                y: 100,
                ease: "ease",
            });
            tl.to(loaderInfo, {
                duration: DURATION,
                delay: 5.5,
                opacity: 0,
                y: -100,
                ease: "ease",
            });

        })

        return () => ctx.revert();

    })

    return (
        <div id="loader" className='loader'>
            <h1 className='loader-counter'>
                <div className='loader-number'>
                    <span ref={el => loaderNumber100 = el} className='loader-number-step'>
                        100
                    </span>
                    <span ref={el => loaderNumber88 = el} className='loader-number-step'>
                        88
                    </span>
                    <span ref={el => loaderNumber22 = el} className='loader-number-step'>
                        22
                    </span>
                    <span ref={el => loaderNumber0 = el} className='loader-number-step'>
                        0
                    </span>
                </div>
                <div ref={el => loaderNumberPercent = el} className='loader-percent'>
                    <span>
                        %
                    </span>
                </div>
            </h1>
            <div ref={el => loaderInfo = el} className='loader-info'>
                <div className='loader-info-left'>
                    <h2>
                        Jaime Castaneda
                    </h2>
                </div>
                <div className='loader-info-center'>
                    <h2>
                        Designer + Developer
                    </h2>
                </div>
                <div className='loader-info-right'>
                    <h2>
                        Portfolio ©{new Date().getFullYear()}
                    </h2>
                </div>
            </div>
        </div >
    );
}

export default Loader;
