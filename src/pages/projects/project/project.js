import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from "react-router-dom"
//components
import Footer from '../../../components/footer.react';
import CTA from '../../../components/cta.react';
//styles
import '../../../styles/project.css';
//assets
import { Media } from "../../../media/media";
//projects 
import { Projects } from '../../projects/projects';

const Project = ({ project }) => {

    //start at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='project'>
            <div className='project-content'>
                <div className='project-hero'>
                    <img className='project-hero-media' key={Media[0].key} src={Media[0].src} />
                </div>
                <div className='project-info-container'>
                    <div className='project-info-title'>
                        <h4>
                            PR.{Projects[project].number} / 016
                        </h4>
                        <h2>
                            <b>{Projects[project].name}</b>
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
                    <div className='project-info-content'>
                        {Projects[project].content}
                    </div>
                    <div className='project-info-details'>
                        <div className='project-info-details-scope'>
                            <h4>
                                Scope
                            </h4>
                            <ul>
                                {Projects[project].purview.map((purviewItem) =>
                                    <li key={purviewItem}><p>{purviewItem}</p></li>)
                                }
                            </ul>
                        </div>
                        <div className='project-info-details-company'>
                            <h4>
                                Company
                            </h4>
                            <p>{Projects[project].company}</p>
                        </div>
                    </div>

                </div>
            </div>
            <CTA />
            <Footer instruction={"Scroll Down"} scroll={true} />
        </div >
    );
}

export default Project;
