import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
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
    //states
    const [activeMedia, setActiveMedia] = useState(0);
    const [activeNumber, setActiveNumber] = useState('XXX');

    //variables
    const handleMouseEnter = (media, number) => {
        setActiveMedia(media)
        setActiveNumber(number)
    }

    const handleMouseLeave = () => {
        setActiveMedia(null)
        setActiveNumber('XXX')
    }

    //start at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='archive'>
            <div className='archive-container'>
                <div className='archive-content'>
                    <div className='archive-preview-container'>
                        <h1 className='archive-preview-header'>
                            Archive
                        </h1>
                        <div className='archive-preview'>
                            {activeMedia === null ? <div className='archive-preview-null' /> : <img className='archive-preview-media' key={Media[activeMedia].key} src={Media[activeMedia].src} />}
                        </div>
                        <div className='archive-preview-info'>
                            <h2>
                                <b>PR. {activeNumber} <br />/ 016</b>
                            </h2>
                        </div>
                    </div>
                    <div className='archive-project-container'>
                        <div className='archive-project-list'>
                            {Projects.map((project) =>
                                <div onMouseEnter={() => handleMouseEnter(project.media, project.number)} onMouseLeave={handleMouseLeave}>
                                    <Archived name={project.name} key={project.name} href={project.href}>
                                        {project.description}
                                    </Archived></div>
                            )}
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
