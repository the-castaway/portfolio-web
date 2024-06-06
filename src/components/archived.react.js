import { React, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
    Link
} from "react-router-dom"
//styles
import '../styles/archived.css';

const Archived = ({ children, name, href }) => {
    //refs
    const archived = useRef(HTMLElement);
    const archivedName = useRef(HTMLElement);
    const archivedHover = useRef(HTMLElement);

    //intro 
    useLayoutEffect(() => {
        const ctx = gsap.context((context) => {
            const tl = gsap.timeline();
            tl.to(archived.current, {
                height: () => 'auto',
                duration: 0.5,
                ease: 'ease',
            }, 0).to(archivedName.current, {
                color: "#4552D9",
                duration: 0.5,
                ease: 'ease',
            }, 0).to(archivedHover.current, {
                opacity: 1,
                duration: 0.5,
                ease: 'ease',
                delay: 0.2,
            }, 0);
            tl.pause();

            context.add('handleMouseEnter', () => {
                tl.play();
                console.log('play')
            })

            context.add('handleMouseLeave', () => {
                tl.reverse();
                console.log('reverse')
            })
        })
        archived.current.addEventListener('mouseenter', ctx.handleMouseEnter);
        archived.current.addEventListener('mouseleave', ctx.handleMouseLeave);
        return () => {
            archived.current.removeEventListener('mouseenter', ctx.handleMouseEnter);
            archived.current.removeEventListener('mouseleave', ctx.handleMouseLeave);
            ctx.revert();
        };
    }, [])

    return (
        <Link ref={archived} to={href} className='archived'>
            <div className='archived-content'>
                <div className='archived-info'>
                    <div className='archived-info-name'>
                        <h4>
                            Name
                        </h4>
                        <p ref={archivedName}>
                            {name}
                        </p>
                    </div>
                </div>
                <div className='archived-icon'>
                    <div className="archived-icon-vector">
                        <svg height={20} width={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.03906 1.05957H18.9378V18.9571" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                            <path d="M1.03906 18.9571L18.9378 1.05957" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div ref={archivedHover} className='archived-hover'>
                <div className='archived-hover-description'>
                    <h4>
                        Description
                    </h4>
                    {children}
                </div>
            </div>
        </Link>
    )
}

export default Archived;