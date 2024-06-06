import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
import Footer from '../../components/footer.react';
import CTA from '../../components/cta.react';
import Archived from '../../components/archived.react';
//styles
import '../../styles/archive.css';
//assets
import { Media } from "../../media/media";

const Archive = () => {


    return (
        <div className='archive'>
            <div className='archive-container'>
                <div className='archive-content'>
                    <div className='archive-preview-container'>
                        <h1 className='archive-preview-header'>
                            Archive
                        </h1>
                        <div className='archive-preview'>
                            <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
                        </div>
                        <div className='archive-preview-info'>
                            <h2>
                                <b>PR. XXX <br />/ 016</b>
                            </h2>
                        </div>
                    </div>
                    <div className='archive-project-container'>
                        <div className='archive-project-list'>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>
                            <Archived name={'Project Name'} href={'/showcase'}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut facilisis arcu, eget commodo dui.
                                </p>
                            </Archived>


                        </div>

                    </div>


                </div>
            </div>
            <CTA />
            <Footer instruction={"Scroll Down"} scroll={true} />
        </div >
    );
}

export default Archive;
