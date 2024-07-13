import { React, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
//utils
import IsTouchDevice from '../utils/deviceCheck';
//styles
import '../styles/App.css';
import '../styles/cursor.css';

function Cursor() {
    const cursor = useRef(HTMLElement)

    useLayoutEffect(() => {
        if (IsTouchDevice()) return;
        const ctx = gsap.context((context) => {
            context.add('mouseMoveAnim', (e) => {
                const { clientX: x, clientY: y } = e;
                gsap.to(cursor.current, {
                    top: y,
                    left: x,
                    duration: 0.00001,
                },
                )
            })
        })
        window.addEventListener('mousemove', (event) => ctx.mouseMoveAnim(event));
    }, [])

    if (IsTouchDevice()) {
        return null;
    }
    else {
        return (
            <div ref={cursor} className="cursor">
                <p>
                    <b>
                        [&nbsp;Enter&nbsp;]
                    </b>
                </p>
            </div>
        );
    }
}

export default Cursor;