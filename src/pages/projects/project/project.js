import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"
//components
import Footer from '../../../components/footer.react';
import CTA from '../../../components/cta.react';
//styles
import '../../../styles/project.css';
//assets
import { Media, BannerMedia } from "../../../media/media";
//projects 
import { Projects } from '../../projects/projects';

const Project = ({ project }) => {
    //refs
    const projectContainer = useRef(HTMLElement);
    const projectInfoContainer = useRef(HTMLElement);
    const projectInfoSpacer = useRef(HTMLElement);
    const projectInfoDetails = useRef(HTMLElement);
    //plugins
    gsap.registerPlugin(ScrollTrigger);

    //activate animation
    const getActiveTL = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectInfoContainer.current,
                markers: false,
                pin: false, // pin the trigger element while active
                start: 'top 300px',
                end: "top 120px",
                scrub: 1,
            }
        });
        tl.addLabel('start')
        tl.to(projectInfoSpacer.current, {
            width: "66.6%",
            ease: "ease",
        }, 0)
        tl.to(projectInfoDetails.current, {
            width: "16.6%",
            ease: "ease",
        }, 0)
        return tl;
    }

    //info animation 
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
        <div className='project'>
            <div ref={projectContainer} className='project-container'>
                <div className='project-banner'>
                    <img className='project-banner-media' key={BannerMedia[project.banner].key} src={BannerMedia[project.banner].src} />
                </div>
                <div ref={projectInfoContainer} className='project-info-container'>
                    <div className='project-info-title'>
                        <h4>
                            PR.{project.number} / 016
                        </h4>
                        <h2>
                            <b>{project.name}</b>
                        </h2>
                        <Link className='project-info-title-back' to={'/showcase'}>
                            <div className='project-info-title-back-icon'>
                                <div className="project-info-title-back-icon-vector">
                                    <svg height={20} width={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.03906 1.05957H18.9378V18.9571" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                                        <path d="M1.03906 18.9571L18.9378 1.05957" stroke="#ECECEC" strokeWidth="2" strokeMiterlimit="10" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div ref={projectInfoSpacer} className='project-info-spacer' />
                    <div ref={projectInfoDetails} className='project-info-details'>
                        <div className='project-info-details-scope'>
                            <h4>
                                Scope
                            </h4>
                            <ul>
                                {project.purview.map((purviewItem) =>
                                    <li key={purviewItem}><p>{purviewItem}</p></li>)
                                }
                            </ul>
                        </div>
                        <div className='project-info-details-company'>
                            <h4>
                                Company
                            </h4>
                            <p>{project.company}</p>
                        </div>
                    </div>

                </div>
                <div className='project-content-container'>
                    <div className='project-content'>
                        {project.content}
                    </div>
                </div>
            </div>
            <CTA />
            <Footer instruction={"Scroll Down"} scroll={true} />
        </div >
    );
}

export default Project;
