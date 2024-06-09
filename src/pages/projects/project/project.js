import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from "react-router-dom"
//components
import Footer from '../../../components/footer.react';
import CTA from '../../../components/cta.react';
import Links from '../../../components/link.react';
//styles
import '../../../styles/project.css';
//assets
import { Media } from "../../../media/media";
//projects 
import { Projects } from '../../projects/projects';

const Project = ({ project }) => {
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <img className='project-hero-media' key={Media[0].key} src={Media[0].src} />
                        <img className='project-hero-media' key={Media[0].key} src={Media[0].src} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui. Morbi eget sapien volutpat, tristique purus semper, ullamcorper orci. Nullam at neque mauris. Phasellus a mollis magna, sed viverra sapien. Morbi luctus efficitur tellus, ac suscipit nibh lacinia dapibus. Nullam cursus tempor dolor, a tristique orci imperdiet venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className='project-info-content-next'>
                            <Links header={'Next Project'} description={"Let's explore"} />
                        </div>
                    </div>
                    <div className='project-info-details'>
                        <div className='project-info-details-scope'>
                            <h4>
                                Scope
                            </h4>
                            <ul>
                                {Projects[project].purview.map((purviewItem) =>
                                    <li><p>{purviewItem}</p></li>)
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
