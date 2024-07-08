import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { NikeMedia } from "../../../media/media";

const Nike = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        Planning an outdoor run can be challenging, especially in unfamiliar areas. To help runners, we aim to provide tools that allow them to choose specific streets, elevation changes, and distances. This will enable runners to optimize their sessions and achieve better results every time.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        The Nike Plus Concept app is designed to help runners plan, execute, and track their runs. It includes live maps that allow users to create custom routes, showing elevation changes and total distance. This feature turns any neighborhood into a potential running circuit. The app also offers graceful running animations that match the user's speed and tracks calories burned, along with overall progress on the chosen route.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={NikeMedia[0].key} src={NikeMedia[0].src} loading="lazy" />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={NikeMedia[1].key} src={NikeMedia[1].src} loading="lazy" />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={NikeMedia[2].key} src={NikeMedia[2].src} loading="lazy" />
                            </div>
                            <div className='content-media-devices-mobile'>
                                <img className='content-media' key={NikeMedia[3].key} src={NikeMedia[3].src} loading="lazy" />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Core loop
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-devices'>
                            <div className='content-media-full'>
                                <img className='content-media' key={NikeMedia[4].key} src={NikeMedia[4].src} loading="lazy" />
                            </div>
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Desktop Login
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
                        Although still a concept, this app has the potential to address key issues faced by our user personas, particularly in planning, tracking, and ease of use. This prototype helped us understand the core problems and allowed us to quickly iterate on designs, resulting in optimal user flows with great UXR results.                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                Task success rate
                            </h4>
                            <p className='content-result-stat'>
                                92%
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                Time on Task
                            </h4>
                            <p className='content-result-stat'>
                                20s
                            </p>
                        </div>
                    </div>
                </div>
                <div className='content-next'>
                    <Link to={"/go-racing"}>
                        <Links header={'Next'} description={'Go Racing'} />
                    </Link>
                </div>
            </section>
        </div >
    );
}

export default Nike;
