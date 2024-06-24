import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { CommunityVoicesHubMedia } from "../../../media/media";

const communityVoicesHub = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        One of Meta’s objectives, and by extension its marketing communications team, is to convince the world and its users of Meta’s continued relevance and future potential. One of the most effective methods has been the Community Voices series, which highlights how Meta’s products have positively impacted users' lives in various ways. The Community Voices Hub serves as a dedicated online space to showcase these stories.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        The Community Voices Hub is essentially a portfolio site showcasing the positive impact Meta has had on the world. We approached it as an interactive portfolio, leveraging Meta’s branding with depth and perspective. The Community Voices Hub also served as a proof of concept, showcasing the capabilities of a new React renderer used by Meta. This demonstration paves the way for future communications and marketing projects.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={CommunityVoicesHubMedia[0].key} src={CommunityVoicesHubMedia[0].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={CommunityVoicesHubMedia[1].key} src={CommunityVoicesHubMedia[1].src} />
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
                                <img className='content-media' key={CommunityVoicesHubMedia[2].key} src={CommunityVoicesHubMedia[2].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={CommunityVoicesHubMedia[3].key} src={CommunityVoicesHubMedia[3].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Intro Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={CommunityVoicesHubMedia[4].key} src={CommunityVoicesHubMedia[4].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={CommunityVoicesHubMedia[5].key} src={CommunityVoicesHubMedia[5].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Dynamic Carousel
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={CommunityVoicesHubMedia[6].key} src={CommunityVoicesHubMedia[6].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={CommunityVoicesHubMedia[7].key} src={CommunityVoicesHubMedia[7].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Outro Section
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Story Telling
                    </h3>
                    <p>
                        Through the use of animations, transitions, and UI design, we crafted a user flow that allows users to sequentially learn more about Community Voices stories. By engaging users with these visual elements, we managed to tell our stories thoroughly and effectively.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={CommunityVoicesHubMedia[8].key} src={CommunityVoicesHubMedia[8].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={CommunityVoicesHubMedia[9].key} src={CommunityVoicesHubMedia[9].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Summary Intro Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-desktop'>
                                <img className='content-media' key={CommunityVoicesHubMedia[10].key} src={CommunityVoicesHubMedia[10].src} />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={CommunityVoicesHubMedia[11].key} src={CommunityVoicesHubMedia[11].src} />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Summary Info Section
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={CommunityVoicesHubMedia[12].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Community Voices Demo
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
                        This project was the first of its kind and served as a proof of concept for launching a site on Meta’s internal React renderer. It also paved the way for implementing the same renderer on Meta’s main communications corporate site, about.meta.com.
                    </p>
                    <p>
                        By utilizing animations and interactive transitions, we created a site that achieved excellent bounce rates and engagement rates during testing.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Bounce Rate
                            </h4>
                            <p className='content-result-stat'>
                                20%
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Engagement Rate
                            </h4>
                            <p className='content-result-stat'>
                                92%
                            </p>
                        </div>
                    </div>
                    <div className='content-collaborators'>
                        <h4>
                            Collaborators
                        </h4>
                        <ul>
                            <li>
                                <p>Ike Ofoegbu</p>
                            </li>
                            <li>
                                <p>Patricia Geagea</p>
                            </li>
                            <li>
                                <p>Dan Kupsco</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-next'>
                    <Link to={"/scroll-to-play"}>
                        <Links header={'Next'} description={"Scroll To Play"} />
                    </Link>
                </div>
            </section>

        </div >
    );
}

export default communityVoicesHub;
