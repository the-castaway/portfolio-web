import React from 'react';
//components
import Location from '../components/location.react';
import Instruction from '../components/instruction.react';
//styles
import '../styles/footer.css';

const Footer = ({ instruction }) => {
    return (
        <div className='footer'>
            <Instruction instruction={instruction} />
            <Location />
        </div >
    );
}

export default Footer;