import { React, useLayoutEffect, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"
//components
import Showcased from '../../components/showcased.react';
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
//styles
import '../../styles/showcase.css';
//projects
import { Projects } from '../projects/projects';

const Showcase = () => {
    //refs
    const showcaseFeaturedUILinks = useRef(HTMLElement);
    const showcaseFeaturedWork = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);
    //variables
    const showcased = Projects.slice(0, 6);
    const projectMap = showcased.map((showcase) =>
        <Showcased href={showcase.href} name={showcase.name} number={showcase.number} thumbnail={showcase.thumbnail} key={showcase.key}>
            {showcase.purview}
        </Showcased>);

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

    //start at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                            Showcase
                        </p>
                        <p>
                            -
                        </p>
                        <Link to={"/archive"}><p className='showcase-featured-ui-archive'>Archive</p></Link>
                    </div>
                </div>
                <div ref={showcaseFeaturedWork} className='showcase-featured-work'>
                    {projectMap}
                </div>

            </div>
            <div className='showcase-more-work-container'>
                <div className='showcase-more-work-content'>
                    <Link to={"/archive"} className='showcase-more-work-card'>
                        <div className='showcase-more-work-card-header'>
                            <h4>
                                Archive
                            </h4>
                            <h2>
                                <b>PR. 007 - 016<br />/ 016</b>
                            </h2>
                        </div>
                        <div className='showcase-more-work-card-icon'>
                            <div className="showcase-more-work-card-icon-vector">
                                <svg height={20} width={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.03906 1.05957H18.9378V18.9571" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                                    <path d="M1.03906 18.9571L18.9378 1.05957" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <CTA />
            <Footer instruction={"Scroll Down"} />
        </div>
    );
}

export default Showcase;





