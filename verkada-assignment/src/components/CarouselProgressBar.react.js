import React, { Component } from 'react';
//styles
import '../styles/Carousel.css';

const CarouselProgressBar = (props) => {
    const timer = props;
    const fillStyles = {animationDuration: `${timer.timer}ms`};
    
    return (
        <div className='CarouselTabUI'>
            <div className='CarouselTabUIFill' style={fillStyles}/>
        </div>
    );
};

export default CarouselProgressBar;