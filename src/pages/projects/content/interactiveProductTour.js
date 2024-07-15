import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { InteractiveProductTourMedia } from "../../../media/media";

const InteractiveProductTour = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        As Meta has embraced the metaverse and shifted its focus to immersive technologies, the main corporate site must reflect this priority. Therefore, we developed interactive modules to enhance learning engagement, improve add-to-cart metrics, and allow users to simulate an immersive experience on the web. One such module is the interactive product tour, which lets users explore Quest headsets in a 3D setting and provides additional information when users click on hotspots. I designed the original concepts for the 3D interactive tour and collaborated with Meta’s commerce engineering team on its development. Additionally, I worked with producers to procure a high-quality, performant 3D asset.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        The interactive product tour is designed to be featured on our product pages using canvas elements, leveraging WebGL and Three.js for 3D rendering, and GSAP for animating transitions between states. Upon landing on the default view, users can select either the headset or the controllers to explore further.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={InteractiveProductTourMedia[0].key} src={InteractiveProductTourMedia[0].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Default State
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={InteractiveProductTourMedia[1].key} src={InteractiveProductTourMedia[1].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Headset View
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={InteractiveProductTourMedia[2].key} src={InteractiveProductTourMedia[2].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Controller View
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Hotspots
                    </h3>
                    <p>
                        Users can take a deep dive into select features found in both the headset and controller views through interactive elements called hotspots. When a user clicks on a hotspot, the model rotates and repositions itself to highlight the respective feature. Additional content is displayed at that moment to provide more information.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={InteractiveProductTourMedia[3].key} src={InteractiveProductTourMedia[3].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Headset Hotspot
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={InteractiveProductTourMedia[4].key} src={InteractiveProductTourMedia[4].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Controller Hotspot
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay playsInline loading="lazy">
                                <source src={InteractiveProductTourMedia[5].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Interactive Product Tour Demo
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Results
                    </h3>
                    <p>
                        The results of this module were significant. We contributed to the goal of creating more interactive and immersive experiences while also substantially improving key metrics. The average time spent on the page increased by over 30 seconds, the learning engagement metric improved by over 8%, and the add-to-cart rate increased by 1%.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Learning Engagement
                            </h4>
                            <p className='content-result-stat'>
                                +8%
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Time Spent
                            </h4>
                            <p className='content-result-stat'>
                                +30s
                            </p>
                        </div>
                    </div>
                    <div className='content-collaborators'>
                        <h4>
                            Collaborators
                        </h4>
                        <ul>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/eugeneteu/' target='_blank'>
                                    <p>Eugene Teo</p>
                                </a>
                            </li>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/kupsco/' target='_blank'>
                                    <p>Dan Kupsco</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-next'>
                    <Link to={"/community-voices-hub"}>
                        <Links header={'Next'} description={"CV Hub"} />
                    </Link>
                </div>
            </section>
        </div >
    );
}

export default InteractiveProductTour;
