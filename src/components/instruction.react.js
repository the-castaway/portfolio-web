import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
//styles
import '../styles/instruction.css';

const Instruction = () => {
    return (
        <div className='instruction'>
            <p className='instruction-text'>
                ( Click to Start )
            </p>
        </div >
    );
}

export default Instruction;