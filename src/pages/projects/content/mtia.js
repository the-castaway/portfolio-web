import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { MetaverseMedia, MTIAMedia } from "../../../media/media";

const MTIA = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        As Meta shifts its focus to the Metaverse, it relies heavily on AI to realize this vision and enhance its existing business model, including its family of apps and ad revenue. To make AI scalable, Meta is developing custom silica for processing AI workloads, reducing the need to rely on external providers.                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        The MTIA v2 page is designed to update investors, potential candidates, and the public about improvements to Meta’s custom silicon. It aims to provide technical deep dives, attract talent, and educate the general population. I designed, built, and launched this site myself within a week.                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MTIAMedia[0].key} src={MTIAMedia[0].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MTIAMedia[1].key} src={MTIAMedia[1].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Landing Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MTIAMedia[2].key} src={MTIAMedia[2].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MTIAMedia[3].key} src={MTIAMedia[3].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                3D Tour Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MTIAMedia[4].key} src={MTIAMedia[4].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MTIAMedia[5].key} src={MTIAMedia[5].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                CTA Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MTIAMedia[6].key} src={MTIAMedia[6].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MTIAMedia[7].key} src={MTIAMedia[7].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Under The Hood Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MTIAMedia[8].key} src={MTIAMedia[8].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MTIAMedia[9].key} src={MTIAMedia[9].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Diagram Slider
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <video className="content-media" loop autoPlay muted>
                                    <source src={MTIAMedia[10].src} type="video/webm"></source>
                                </video>
                            </div>
                            <div className='content-media-devices-mobile'>
                                <video className="content-media" loop autoPlay muted>
                                    <source src={MTIAMedia[11].src} type="video/webm"></source>
                                </video>
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Hardware Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MTIAMedia[12].key} src={MTIAMedia[12].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MTIAMedia[13].key} src={MTIAMedia[13].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Investment Section
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Technical Breakdown
                    </h3>
                    <p>
                        We relied heavily on diagrams, 3D models, and Scroll to Play modules to convey complex topics and transform them into visually appealing, digestible pieces. This was challenging due to limited assets, as the project was kept under wraps until launch. Additionally, finalizing content was difficult because the chip and its results improved as its models learned, prompting our partners to delay locking content for the page.                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={MTIAMedia[14].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                MTIA v2 Demo
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
                        The MTIA v2 Explainer page was a success, achieving a 92% pull-through on key messaging. It has become the most trafficked infrastructure-related site on the AI platform year-to-date, with an average 5x increase in impressions compared to similar pages.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Pull-Through
                            </h4>
                            <p className='content-result-stat'>
                                92%
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Impressions
                            </h4>
                            <p className='content-result-stat'>
                                5x
                            </p>
                        </div>
                    </div>
                    <div className='content-collaborators'>
                        <h4>
                            Collaborators
                        </h4>
                        <ul>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/kupsco/' target='_blank'>
                                    <p>Dan Kupsco</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-next'>
                    <Link to={"/news-hub"}>
                        <Links header={'Next'} description={'News Hub'} />
                    </Link>
                </div>
            </section>
        </div >
    );
}

export default MTIA;
