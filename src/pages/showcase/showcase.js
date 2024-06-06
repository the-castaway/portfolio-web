import { React, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"
//components
import Featured from '../../components/featured.react';
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
//styles
import '../../styles/showcase.css';

const Showcase = () => {
    //refs
    const showcaseFeaturedUILinks = useRef(HTMLElement);
    const showcaseFeaturedWork = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);

    //activate animation
    const getActiveTL = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: showcaseFeaturedWork.current,
                markers: false,
                pin: false, // pin the trigger element while active
                start: 'top 10%',
                end: "bottom bottom",
                scrub: false,
                toggleActions: "play reverse play reverse"
            }
        });
        tl.to(showcaseFeaturedUILinks.current, {
            gap: "60px",
            padding: "20 60px",
            duration: 0.5,
            ease: "ease",
        }, 0)
            .addLabel('Active')
        return tl;
    }

    //intro 
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            getActiveTL();
        })
        return () => {
            ctx.revert();
        };
    }, [])


    return (
        <div id="showcase" className='showcase'>
            <div className='showcase-intro-container'>
                <div className='showcase-intro-content'>
                    <h2 className='showcase-intro-header'>
                        A Bay Area based creative who's strategy and design unite to shape inspiring projects that resonate &nbsp;with&nbsp;our&nbsp;time.
                    </h2>
                    <div className='showcase-intro-info'>
                        <div className="showcase-intro-info-projects">
                            <h4>
                                Projects
                            </h4>
                            <p>
                                016
                            </p>
                        </div>
                        <div className="showcase-intro-info-ip">
                            <h4>
                                IP
                            </h4>
                            <p>
                                &#169; 2024
                            </p>
                        </div>
                        <div className="showcase-intro-info-purview">
                            <h4>
                                Purview
                            </h4>
                            <p>
                                Product Design, Websites, Front-end
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='showcase-featured-container'>
                <div className='showcase-featured-ui'>
                    <div ref={showcaseFeaturedUILinks} className='showcase-feature-ui-links'>
                        <p className='showcase-featured-ui-latest'>
                            Featured
                        </p>
                        <p>
                            -
                        </p>
                        <Link to={"/archive"}><p className='showcase-featured-ui-archive'>Archive</p></Link>
                    </div>
                </div>
                <div ref={showcaseFeaturedWork} className='showcase-featured-work'>
                    <Featured href={'/showcase'} number={'001'} media={0}>
                        <h2>
                            <b>Meta News</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'002'} media={1}>
                        <h2>
                            <b>Meta Blog</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'003'} media={2}>
                        <h2>
                            <b>Rayban Stories UTH</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'004'} media={3}>
                        <h2>
                            <b>Projects</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'001'} media={0}>
                        <h2>
                            <b>Meta News</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'002'} media={1}>
                        <h2>
                            <b>Meta Blog</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'003'} media={2}>
                        <h2>
                            <b>Rayban Stories UTH</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                    <Featured href={'/showcase'} number={'004'} media={3}>
                        <h2>
                            <b>Projects</b>
                        </h2>
                        <p>
                            Web Design, <br />Front-end Eng,<br />UI/UX
                        </p>
                    </Featured>
                </div>
            </div>
            <CTA />
            <Footer instruction={"Scroll Down"} />
        </div>
    );
}

export default Showcase;





