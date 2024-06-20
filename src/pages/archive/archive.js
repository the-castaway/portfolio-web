import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
//components
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
import Archived from '../../components/archived.react';
//styles
import '../../styles/archive.css';
//assets
import { ThumbnailMedia } from "../../media/media";
//projects 
import { Projects } from '../projects/projects';

const Archive = () => {
    //states
    const [activeThumbnail, setActiveThumbnail] = useState(null);
    const [activeNumber, setActiveNumber] = useState('XXX');

    //variables
    const handleMouseEnter = (thumbnail, number) => {
        setActiveThumbnail(thumbnail)
        setActiveNumber(number)
    }

    const handleMouseLeave = () => {
        setActiveThumbnail(null)
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
                            {activeThumbnail === null ? <div className='archive-preview-null' /> : <img className='archive-preview-media' key={activeThumbnail.key} src={activeThumbnail.src} />}
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
                                <div key={project.key} onMouseEnter={() => handleMouseEnter(project.thumbnail, project.number)} onMouseLeave={handleMouseLeave}>
                                    <Archived name={project.name} key={project.key} href={project.href}>
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
