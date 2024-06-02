import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//styles
import '../styles/instruction.css';

const Instruction = ({ instruction, scroll }) => {
    //refs
    const instructionText = useRef(HTMLElement);
    const instructionBrackets = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);

    //intro animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(instructionText.current,
                {
                    duration: 0.5,
                    opacity: 1,
                    delay: 0.3,
                }, 0
            )
            tl.to(instructionBrackets.current,
                {
                    duration: 0.5,
                    width: '100%',
                }, 0
            )

            ScrollTrigger.addEventListener("scrollEnd", () => {
                tl.play()
            }

            );
            ScrollTrigger.addEventListener("scrollStart", () => {
                tl.reverse()
            }
            );
        })
        return () => {
            ctx.revert();
        };
    }, [scroll])

    return (
        <div className='instruction'>
            <p className='instruction-text' ref={instructionText}>
                {instruction}
            </p>
            <div className='instruction-brackets' ref={instructionBrackets}>
                <p className='instruction-bracket-left'>
                    [
                </p>
                <p className='instruction-bracket-right'>
                    ]
                </p>
            </div>
        </div >
    );
}

export default Instruction;