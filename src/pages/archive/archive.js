import React, { useEffect, useLayoutEffect, useRef, useContext, useState } from 'react';
import { gsap } from 'gsap';
//transitionContext
import TransitionContext from '../../context/transitionContext';
//components
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
import Archived from '../../components/archived.react';
//styles
import '../../styles/archive.css';
//projects 
import { Projects } from '../projects/projects';

const Archive = () => {
    //refs
    const archivePreviewContainer = useRef(HTMLElement);
    const archiveProjectContainer = useRef(HTMLElement);
    const archiveCTA = useRef(HTMLElement);
    //states
    const [activeThumbnail, setActiveThumbnail] = useState(null);
    const [activeNumber, setActiveNumber] = useState('XXX');
    //context
    const { exit } = useContext(TransitionContext);
    //variables
    const handleMouseEnter = (thumbnail, number) => {
        setActiveThumbnail(thumbnail)
        setActiveNumber(number)
    }

    const handleMouseLeave = () => {
        setActiveThumbnail(null)
        setActiveNumber('XXX')
    }

    //intro animation timeline
    const getIntroTL = () => {
        const tl = gsap.timeline();
        tl.from(archivePreviewContainer.current, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'ease',
        }, 0)
        tl.from(archiveProjectContainer.current, {
            duration: 0.8,
            delay: 0.2,
            y: 50,
            pointerEvents: 'none',
            opacity: 0,
            ease: 'ease',
        }, 0)
        return tl;
    }

    //Outro animation timeline
    const getOutroTL = () => {
        const tl = gsap.timeline();
        tl.to(archivePreviewContainer.current, {
            duration: 0.8,
            delay: 0.2,
            y: 50,
            opacity: 0,
            ease: 'ease',
        }, 0)
        tl.to(archiveProjectContainer.current, {
            duration: 0.8,
            delay: 0,
            y: 50,
            pointerEvents: 'none',
            opacity: 0,
            ease: 'ease',
        }, 0)
        tl.to(archiveCTA.current, {
            duration: 0.8,
            delay: 0,
            y: 100,
            opacity: 0,
            ease: 'ease',
        }, 0)
        return tl;
    }

    //intro 
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            getIntroTL();
        })
        return () => {
            ctx.revert();
        };
    }, [])

    //outro 
    useEffect(() => {
        const ctx = gsap.context(() => { })
        if (exit) {
            ctx.add(() => { getOutroTL() })
        }
        return () => {
            ctx.revert();
        };
    }, [exit])

    //start at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='archive'>
            <div className='archive-container'>
                <div className='archive-content'>
                    <div ref={archivePreviewContainer} className='archive-preview-container'>
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
                    <div ref={archiveProjectContainer} className='archive-project-container'>
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
            <div ref={archiveCTA}>
                <CTA />
            </div>
            <Footer instruction={"Scroll Down"} scroll={true} />
        </div >
    );
}

export default Archive;
