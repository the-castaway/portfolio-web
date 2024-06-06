import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
import Archived from '../../components/archived.react';
//styles
import '../../styles/archive.css';
//assets
import { Media } from "../../media/media";
//projects 
import { Projects } from '../projects/projects';

const Archive = () => {
    //variables
    const projectMap = Projects.map((project) =>
        <Archived name={project.name} href={project.href}>
            {project.description}
        </Archived>);
    return (
        <div className='archive'>
            <div className='archive-container'>
                <div className='archive-content'>
                    <div className='archive-preview-container'>
                        <h1 className='archive-preview-header'>
                            Archive
                        </h1>
                        <div className='archive-preview'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                        <div className='archive-preview-info'>
                            <h2>
                                <b>PR. XXX <br />/ 016</b>
                            </h2>
                        </div>
                    </div>
                    <div className='archive-project-container'>
                        <div className='archive-project-list'>
                            {projectMap}
                        </div>
                    </div>
                </div>
            </div>
            <CTA />
            <Footer instruction={"Scroll Down"} scroll={true} />
        </div >
    );
}

export default Archive;
