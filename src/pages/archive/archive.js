import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
import Footer from '../../components/footer.react';
//styles
import '../../styles/archive.css';
//assets
import { Media } from "../../media/media";

const Archive = () => {


    return (
        <div className='archive'>
            <div className='archive-container'>
                <div className='archive-content'>
                    <h1>
                        Archive
                    </h1>
                </div>
            </div>

            <Footer instruction={"Scroll Down"} scroll={true} />
        </div >
    );
}

export default Archive;
