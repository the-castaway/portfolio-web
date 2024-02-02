import { React, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
//styles
import '../styles/App.css';

function Cursor() {
    let cursor = useRef(HTMLElement)
    useLayoutEffect(() => {
        const ctx = gsap.context((context) => {
            context.add('mouseMoveAnim', (e) => {
                if (cursor) {
                    const { clientX: x, clientY: y } = e;
                    gsap.to(cursor, {
                        top: y,
                        left: x,
                        duration: 0.00001,
                    },
                    )
                }
            })
        })
        window.addEventListener('mousemove', (event) => ctx.mouseMoveAnim(event));
    },)

    return (
        <div ref={el => cursor = el} className="cursor" />
    );
}

export default Cursor;