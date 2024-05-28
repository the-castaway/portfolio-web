import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
//components
import Location from '../components/location.react';
import Instruction from '../components/instruction.react';
//styles
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Instruction />
            <Location />
        </div >
    );
}

export default Footer;