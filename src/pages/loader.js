import React from 'react';
import { gsap } from "gsap";
//components
import Header from '../components/header.react';
//styles
import '../styles/loader.css';

const Loader = () => {


    return (
        <div id="loader" className='loader'>
            <div className='loader-counter'>
                <Header headerContent="100%" />
            </div>
            <div className='loader-info'>
                <div className='loader-info-left'>
                    <h2>
                        Jaime Castaneda
                    </h2>
                </div>
                <div className='loader-info-center'>
                    <h2>
                        Designer + Developer
                    </h2>
                </div>
                <div className='loader-info-right'>
                    <h2>
                        Portfolio ©2023
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Loader;
