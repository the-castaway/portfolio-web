import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
//components
import Header from '../components/header.react';
//styles
import '../styles/loader.css';

const Loader = () => {
    let loaderInfo1 = useRef(null);
    let loaderInfo2 = useRef(null);
    let loaderInfo3 = useRef(null);

    useEffect(() => {
        var tl = gsap.timeline();
        tl.from(loaderInfo1, { delay: 1, opacity: 0, duration: 0.8 })
        tl.from(loaderInfo2, { opacity: 0, duration: 0.8 })
        tl.from(loaderInfo3, { opacity: 0, duration: 0.8 })
    })

    return (
        <div id="loader" className='loader'>
            <div className='loader-counter'>
                <Header headerContent="100%" />
            </div>
            <div className='loader-info'>
                <div ref={el => loaderInfo1 = el} className='loader-info-left'>
                    <h2>
                        Jaime Castaneda
                    </h2>
                </div>
                <div ref={el => loaderInfo2 = el} className='loader-info-center'>
                    <h2>
                        Designer + Developer
                    </h2>
                </div>
                <div ref={el => loaderInfo3 = el} className='loader-info-right'>
                    <h2>
                        Portfolio ©{new Date().getFullYear()}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Loader;
