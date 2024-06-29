import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { InteractiveProductTourMedia, NewsMedia } from "../../../media/media";

const News = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        Meta, like many large companies, faces unique challenges. Effective logistics and communication are crucial, yet issues can still arise. Sometimes, different teams end up working in isolation, which can lead to inefficiencies. Currently, Meta's web operations are experiencing this problem, with numerous web entities managed by separate teams that do not communicate effectively. The Meta News Hub was created to address this issue.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        The Meta News Hub is a centralized platform for all company-related information. It includes sub-hubs for various areas of interest, such as Reality Labs, Family of Apps, and Policies. Featuring its own navigation and search functionality, it makes finding stories easier than ever in Meta’s history.                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={NewsMedia[0].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Home
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={NewsMedia[1].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Reality Labs News Hub
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={NewsMedia[2].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                News Post
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={NewsMedia[3].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                News Archive
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted>
                                <source src={NewsMedia[4].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                News Nav
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
                        While the Meta News Hub project has not yet launched, initiating this project has guaranteed benefits. Significant efficiencies have been realized through the consolidation of 28 blogs and numerous supporting toolkits. By streamlining these web entities, the project has started to improve operational efficiency right from the beginning.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Consolidated Blogs
                            </h4>
                            <p className='content-result-stat'>
                                28
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Deprecated Toolkits
                            </h4>
                            <p className='content-result-stat'>
                                24
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
                    <Link to={"/nike-plus"}>
                        <Links header={'Next'} description={"Nike Plus"} />
                    </Link>
                </div>
            </section>
        </div >
    );
}

export default News;
