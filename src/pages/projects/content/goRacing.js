import React from 'react';
import { Link } from "react-router-dom"
//components
import Links from '../../../components/link.react';
//styles
import '../../../styles/content.css';
//assets
import { goRacingMedia } from "../../../media/media";

const GoRacing = () => {
    return (
        <div className='content'>
            <section className='content-section'>
                <div className='content-section-text'>
                    <p>
                        Colorful Notion aimed to develop an app that would encourage daily user engagement by providing activities to prepare for daily events and heavily incentivize purchases. We decided on a racing game where users could build their cars during "off-time" using upgrades from the store. Additionally, the game would foster attachment by allowing users to create and submit circuits using the streets in their surrounding areas.
                    </p>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        Concept
                    </h3>
                    <p>
                        Go Racing is a mobile racing game where users can compete against their friends in race events held every few hours. These races take place on tracks created by users using their local maps. Players race for cash prizes and loot boxes containing car modifications and traps for their competitors.
                    </p>
                </div>
                <div className='content-section-text'>
                    <h3>
                        Core Loop
                    </h3>
                    <p>
                        Users will land on the home screen, where they can prepare for a race by selecting their cars, buying enhancements, and learning the map. When it's time to race, all users are automatically sent to a lobby area with a countdown timer. During this stage, users can chat with their peers. Once the countdown ends, the race begins, and users compete to achieve the fastest time. After the race, results are displayed, and cash prizes are allocated to the winners.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[0].key} src={goRacingMedia[0].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Home Scene
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[1].key} src={goRacingMedia[1].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Lobby Scene
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[2].key} src={goRacingMedia[2].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Race Scene
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[3].key} src={goRacingMedia[3].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Results Scene
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className='content-section'>
                <div className='content-section-text'>
                    <h3>
                        User Retention
                    </h3>
                    <p>
                        While cash prizes significantly helped with user retention, other methods were also employed to encourage users to return. Users who complete a daily streak receive loot boxes after each race, containing items that provide an edge in the next race.
                    </p>
                </div>
                <div className='content-media-container'>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[4].key} src={goRacingMedia[4].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Shop Scene
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[5].key} src={goRacingMedia[5].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Loot Box Scene
                            </h4>
                        </div>
                    </div>
                    <div className='content-media-node'>
                        <div className='content-media-full'>
                            <img className='content-media' key={goRacingMedia[6].key} src={goRacingMedia[6].src} loading="lazy" />
                        </div>
                        <div className='content-media-description'>
                            <h4>
                                Loot Box Results
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
                        On the initial launch, we observed impressive but expected user retention. Early adopters faced little competition, making it easy to win cash prizes. As organic growth took hold and we implemented paid advertisements, the results normalized but remained exceptional. During my tenure, our user base grew exponentially, with an average daily active user (DAU) rate of 44%.
                    </p>
                    <div className='content-results'>
                        <div className='content-result'>
                            <h4>
                                30 Day retention Rate
                            </h4>
                            <p className='content-result-stat'>
                                39%
                            </p>
                        </div>
                        <div className='content-result'>
                            <h4>
                                DAU
                            </h4>
                            <p className='content-result-stat'>
                                44%
                            </p>
                        </div>
                    </div>
                    <div className='content-collaborators'>
                        <h4>
                            Collaborators
                        </h4>
                        <ul>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/smayorga/' target='_blank'>
                                    <p>Sergio Mayorga</p>
                                </a>
                            </li>
                            <li>
                                <a className="content-collaborator" href='https://www.linkedin.com/in/austin-taylor-095819100/' target='_blank'>
                                    <p>Austin Taylor</p>
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

export default GoRacing;
