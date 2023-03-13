import React, { Component } from 'react';
//styles
import '../styles/CarouselBG.css';
//assets
import background_image from '../media/background_circle.png';

function CarouselBG() {
  return (
    <div className="CarouselBG">
        <img className="CarouselBGCircle" src={background_image}/>
    </div>
  );
}

export default CarouselBG;