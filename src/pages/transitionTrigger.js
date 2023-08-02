import { React, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { SwitchTransition, Transition, CSSTransition } from 'react-transition-group';
import { useLocation } from "react-router-dom"

const TransitionTrigger = ({ children }) => {
    gsap.registerPlugin(SplitText);
    const location = useLocation();
    //const header = children[0].children[0].children[0];
    //const [isActive, setIsActive] = useState(false);
    return (
        <SwitchTransition>
            <Transition
                key={location.pathname}
                timeout={1600}
                onEnter={(node) => {
                    const header = node.querySelectorAll('.header');
                    console.log(header)

                    const tl = gsap.timeline(),
                        mySplitText = new SplitText(header, { type: "chars" }),
                        chars = mySplitText.chars; //an array of all the divs that wrap each character

                    tl.from(chars, {
                        duration: 0.8,
                        opacity: 0,
                        y: 200,
                        rotationX: 0,
                        ease: "ease",
                        stagger: 0.1
                    });

                }}
                onExit={(node) => {
                    const header = node.querySelectorAll('.header');
                    console.log(header)

                    const tl = gsap.timeline(),
                        mySplitText = new SplitText(header, { type: "chars" }),
                        chars = mySplitText.chars; //an array of all the divs that wrap each character

                    tl.to(chars, {
                        duration: 0.8,
                        opacity: 0,
                        y: -200,
                        rotationX: 0,
                        ease: "ease",
                        stagger: 0.1
                    });
                }}
            >
                {children}
            </Transition>
        </SwitchTransition>
    );
}

export default TransitionTrigger;