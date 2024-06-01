import { React, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Observer } from 'gsap/Observer';
import {
    Link,
    Outlet,
} from "react-router-dom"
//components
import Footer from '../../components/footer.react';
import Instruction from '../../components/instruction.react';
//styles
import '../../styles/showcase.css';
//assets
import { Media } from "../../media/media";

const Showcase = () => {

    useLayoutEffect(() => {


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





            <Footer instruction={"Scroll Down"} />
        </div >

    );
}

export default Showcase;





