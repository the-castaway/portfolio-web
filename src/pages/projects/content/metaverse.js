import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { MetaverseMedia } from "../../../media/media";

const Metaverse = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        When Facebook rebranded as Meta and shifted its focus to the Metaverse, our Communications and Marketing teams had to ensure we captured maximum search engine traffic. To achieve this, we created an explainer page detailing the possibilities of the Metaverse.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        The Metaverse explainer page was designed to answer various frequently searched questions, such as what the Metaverse is, who can use it, and how users can access it. Our main objective was to provide easily digestible content while explaining complex concepts thoroughly.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MetaverseMedia[0].key} src={MetaverseMedia[0].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MetaverseMedia[1].key} src={MetaverseMedia[1].src} />
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
                                <img className='content-media' key={MetaverseMedia[2].key} src={MetaverseMedia[2].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MetaverseMedia[3].key} src={MetaverseMedia[3].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Capabilities Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <video className="content-media" loop autoPlay muted>
                                    <source src={MetaverseMedia[4].src} type="video/webm"></source>
                                </video>
                            </div>
                            <div className='content-media-devices-mobile'>
                                <video className="content-media" loop autoPlay muted>
                                    <source src={MetaverseMedia[5].src} type="video/webm"></source>
                                </video>
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Access Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MetaverseMedia[6].key} src={MetaverseMedia[6].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MetaverseMedia[7].key} src={MetaverseMedia[7].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Who Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={MetaverseMedia[8].key} src={MetaverseMedia[8].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={MetaverseMedia[9].key} src={MetaverseMedia[9].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                News Section
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Learnings
                    </h3>
                    <p>
                        This project was the first to include our Scroll To Play image sequence component. With sufficient lead time, we explored different visual treatments and experimented with scroll-based experiences. The key takeaway was to never underestimate development time, as immersive experiences can vary significantly in how long they take to develop.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={MetaverseMedia[10].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Metaverse Demo
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
                        The Metaverse page was a huge success, achieving an impressive 89% message pull-through on popular search key terms immediately after our rebrand. It also had a significantly lower bounce rate compared to other pages on the site, demonstrating strong user interest in both the Metaverse and our company.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Pull-Through
                            </h4>
                            <p className='content-result-stat'>
                                89%
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Bounce Rate
                            </h4>
                            <p className='content-result-stat'>
                                24%
                            </p>
                        </div>
                    </div>
                    <div className='content-collaborators'>
                        <h4>
                            Collaborators
                        </h4>
                        <ul>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/jason-young-853bab4/' target='_blank'>
                                    <p>Jason Young</p>
                                </a>
                            </li>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/patriciageagea/' target='_blank'>
                                    <p>Patricia Geagea</p>
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
                        <Links header={'Next'} description={"Community Voices Hub"} />
                    </Link>
                </div>
            </section>
        </div >
    );
}

export default Metaverse;
