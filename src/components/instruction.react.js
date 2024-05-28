import React, { useLayoutEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
//styles
import '../styles/instruction.css';

const Instruction = () => {
    //refs
    const instructionText = useRef(HTMLElement);
    const instructionBrackets = useRef(HTMLElement);

    //intro animations
    useLayoutEffect(() => {
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
        })
        return () => {
            ctx.revert();
        };
    }, [])

    return (
        <div className='instruction'>
            <p className='instruction-text' ref={instructionText}>
                Click Anywhere
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