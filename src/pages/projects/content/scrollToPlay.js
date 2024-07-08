import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { ScrollToPlayMedia } from "../../../media/media";

const ScrollToPlay = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        As one of Meta’s leading web teams, one of our main objectives was to stay up-to-date with the latest technology and ensure Meta’s web presence remains innovative. To this end, I led the efforts on our Scroll to Play experiences, which allow users to essentially buffer through a "video" as they scroll. We created several versions of this experience, each tailored to specific use cases.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        I experimented with various methods to create this experience. One approach involved playing through a sequence of images rendered through a canvas element. This allowed us granular control over the animation by importing images as frames. However, the downside was the large payload from loading hundreds of images, which we mitigated through lazy loading and tiered gatekeeping.
                    </p>
                    <p>
                        Another approach was to use a video element and scrub through it based on scroll position. This limited the payload to a single asset but was highly dependent on our CMS infrastructure and video encoding, which did not integrate well together.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted loading="lazy">
                                <source src={ScrollToPlayMedia[2].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Metaverse Explainer Page
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted loading="lazy">
                                <source src={ScrollToPlayMedia[3].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Ray-ban Stories Under the Hood
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Modularity and Scalability
                    </h3>
                    <p>
                        I built the Scroll To Play module with scalability in mind, I knew that this module would garner a lot of attention from our partners so I built it in a way that would allow them to plug and play into their own system. Using the CMS to retrieve data like the media used and the text content that appears, our partners were able to implement this on their sites without any code pushes.
                    </p>
                    <p>
                        One use case we created for our Scroll to Play experience is its inline implementation, essentially replacing an inline image or video. This allows the animation to scroll along with the content rather than sticking to the screen. This subtle and nuanced approach enables us to compress our assets significantly since they are not full bleed, and it allows us to cap the animation length due to the limited real estate on the viewport.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted loading="lazy">
                                <source src={ScrollToPlayMedia[0].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Project Aria Landing Page
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted loading="lazy">
                                <source src={ScrollToPlayMedia[4].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Scroll To Reveal Content
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <video className="content-media" loop autoPlay muted loading="lazy">
                                <source src={ScrollToPlayMedia[1].src} type="video/webm"></source>
                            </video>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Brand Portal
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
                        Scroll to Play experiences have on average greatly increased both time spent on page and learning engagement. On our commerce entity they’ve even been proven to increase the add to cart metric by 6%.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Time Spent
                            </h4>
                            <p className='content-result-stat'>
                                +20s
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Learning Engagement
                            </h4>
                            <p className='content-result-stat'>
                                23%
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
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/majimmy88/' target='_blank'>
                                    <p>Jimmy Ma</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='content-next'>
                    <Link to={"/metaverse"}>
                        <Links header={'Next'} description={"Metaverse"} />
                    </Link>
                </div>
            </section>
        </div >
    );
}

export default ScrollToPlay;
