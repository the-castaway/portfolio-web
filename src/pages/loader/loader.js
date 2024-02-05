import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
//styles
import '../../styles/loader.css';

const TIME = 4;

const Loader = () => {

    //refs
    const loaderCounter = useRef();
    const loaderHeader = useRef();

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
                loaderHeaderSplit = new SplitText(loaderHeader.current, { type: "chars" }),
                loaderHeaderChars = loaderHeaderSplit.chars;

            tl.from(loaderHeaderChars, {
                duration: 0.5,
                opacity: 0,
                y: '25%',
                ease: "ease",
                stagger: 0.05,
                delay: 0.5,
            });
            tl.from(loaderCounter.current, {
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
                delay: 0.5,
            });
            tl.to(loaderCounter.current, {
                duration: 0.5,
                opacity: 0,
                y: '-25%',
                ease: "ease",
            });
            tl.to(loaderHeaderChars, {
                duration: 0.5,
                opacity: 0,
                y: '-25%',
                ease: "ease",
                stagger: 0.05,
                delay: -0.5,
            });
        })
        return () => ctx.revert();
    }, []);

    return (
        <div id="loader" className='loader'>
            <div className='loader-container'>
                <p className='loader-counter'>
                    <span ref={loaderCounter}>
                        000
                    </span>
                </p>
                <h1 className='loader-header'>
                    <span ref={loaderHeader}>
                        Hello.
                    </span>
                </h1>
            </div >
        </div >
    );
}

export default Loader;
