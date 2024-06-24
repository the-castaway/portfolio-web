import { React, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//styles
import '../styles/cta.css';

const CTA = () => {
    //refs
    const cta = useRef(HTMLElement);
    const ctaHeaderLine = useRef(HTMLElement);
    const ctaHeaderTextLeft = useRef(HTMLElement);
    const ctaHeaderTextRight = useRef(HTMLElement);
    const ctaConnectHeaderText = useRef(HTMLElement);
    const ctaConnectHeaderBrackets = useRef(HTMLElement);
    const ctaConnectHeaderBracketLeft = useRef(HTMLElement);
    const ctaConnectHeaderBracketRight = useRef(HTMLElement);
    const ctaConnectLocale = useRef(HTMLElement);
    const ctaConnectSocials = useRef(HTMLElement);
    const ctaConnectResume = useRef(HTMLElement);
    const ctaConnectEmail = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);

    //activate animation
    const getActiveTL = () => {
        const tl = gsap.timeline()
        tl.to(cta.current, {
            backgroundColor: "#ececec",
            duration: 0.5,
            ease: 'ease',
        }, 0).to(ctaHeaderLine.current, {
            width: "33.3%",
            backgroundColor: "#303030",
            duration: 0.5,
            ease: 'ease',
        }, 0).to(
            [
                ctaHeaderTextLeft.current,
                ctaHeaderTextRight.current,
                ctaConnectLocale.current,
                ctaConnectSocials.current,
                ctaConnectResume.current,
                ctaConnectEmail.current,
                ctaConnectHeaderBracketLeft.current,
                ctaConnectHeaderBracketRight.current,

            ], {
            color: "#303030",
            duration: 0.5,
            ease: 'ease',
        }, 0).to(ctaConnectHeaderBrackets.current, {
            width: "100%",
            duration: 0.5,
            delay: 0.5,
            ease: 'ease',
        }, 0).to(ctaConnectHeaderText.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.2,
            delay: 0.9,
            ease: 'ease',
        }, 0)
        tl.pause().progress(1).progress(0);
        return tl;
    }

    //intro 
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let tl = getActiveTL();
            ScrollTrigger.create({
                start: 0,
                markers: false,
                end: () => ScrollTrigger.maxScroll(window) - 10,
                onLeave: () => { tl.play(); },
                onEnterBack: () => { tl.reverse(); }
            });
        })
        return () => {
            ctx.revert();
        };
    }, [])

    return (
        <div ref={cta} className='cta'>
            <div className='cta-container'>
                <div className='cta-content'>
                    <div className='cta-header'>
                        <div className='cta-header-text-left'>
                            <h1 ref={ctaHeaderTextLeft} >
                                2024
                            </h1>
                        </div>
                        <div ref={ctaHeaderLine} className='cta-header-line' />
                        <div className='cta-header-text-right'>
                            <h1 ref={ctaHeaderTextRight}>
                                Folio
                            </h1>
                        </div>
                    </div>
                    <div className='cta-connect'>
                        <div className='cta-connect-header'>
                            <h2 ref={ctaConnectHeaderText} className='cta-connect-header-text'>
                                Let's Connect
                            </h2>
                            <div ref={ctaConnectHeaderBrackets} className='cta-connect-header-brackets'>
                                <h2 ref={ctaConnectHeaderBracketLeft} >
                                    [
                                </h2>
                                <h2 ref={ctaConnectHeaderBracketRight}>
                                    ]
                                </h2>
                            </div>
                        </div>
                        <div className='cta-connect-info'>
                            <div className="cta-connect-info-text-node">
                                <h4>
                                    Locale
                                </h4>
                                <p ref={ctaConnectLocale}>
                                    SF, Bay Area
                                </p>
                            </div>
                            <div className="cta-connect-info-text-node">
                                <h4>
                                    Socials
                                </h4>
                                <p ref={ctaConnectSocials}>
                                    @the_casta_way
                                </p>
                            </div>
                            <a className="cta-connect-info-text-node cta-connect-info-link" href="https://drive.google.com/file/d/1UxZ03F-SXGaJwTzW1bVygwm-ewdB0LPP/view?usp=sharing" target='_blank'>
                                <h4>
                                    Resume
                                </h4>
                                <p ref={ctaConnectResume}>
                                    <span className='cta-connect-info-link'>
                                        2024 Resume
                                    </span>
                                </p>
                            </a>
                            <a className="cta-connect-info-text-node" href="mailto:jccd.designs@gmail.com">
                                <h4>
                                    Email
                                </h4>
                                <p ref={ctaConnectEmail}>
                                    <span className='cta-connect-info-link'>
                                        hello@jaimecastaneda.com
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default CTA;