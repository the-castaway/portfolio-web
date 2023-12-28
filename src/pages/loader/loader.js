import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
//styles
import '../../styles/loader.css';

const TIME = 4;

const Loader = () => {

    //refs
    let loaderCounter = useRef(null);
    let loaderHeader = useRef(null);

    //initialize gsap plugins
    gsap.registerPlugin(SplitText);

    //counter 
    let counter = {
        val: 0
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            //define timeline
            const tl = gsap.timeline(),
                loaderHeaderSplit = new SplitText(loaderHeader, { type: "chars" }),
                loaderHeaderChars = loaderHeaderSplit.chars;

            tl.from(loaderHeaderChars, {
                duration: 0.5,
                opacity: 0,
                y: 20,
                ease: "ease",
                stagger: 0.05,
                delay: 0.5,
            });
            tl.from(loaderCounter, {
                duration: 0.5,
                opacity: 0,
                ease: "ease",
                delay: -0.4,

            });
            tl.to(counter, {
                duration: TIME,
                val: 100,
                onUpdate() {
                    let counterVal = Math.ceil(counter.val)
                    if (counter.val <= 9) {
                        loaderCounter.textContent = '00' + counterVal;
                    }
                    else if (counter.val <= 99 && counter.val >= 9) {
                        loaderCounter.textContent = '0' + counterVal;
                    }
                    else {
                        loaderCounter.textContent = counterVal;
                    }
                },
                ease: 'power3.inOut',
                delay: 0.5,
            });
            tl.to(loaderCounter, {
                duration: 0.5,
                opacity: 0,
                ease: "ease",
            });
            tl.to(loaderHeaderChars, {
                duration: 0.5,
                opacity: 0,
                y: -20,
                ease: "ease",
                stagger: 0.05,
                delay: -0.5,
            });
        })
        return () => ctx.revert();
    });

    return (
        <div id="loader" className='loader'>
            <div className='loader-container'>
                <p className='loader-counter'>
                    <span ref={el => loaderCounter = el}>
                        000
                    </span>
                </p>
                <h1 ref={el => loaderHeader = el} className='loader-header'>
                    <span ref={el => loaderHeader = el}>
                        Hello.
                    </span>
                </h1>
            </div >
        </div >
    );
}

export default Loader;
