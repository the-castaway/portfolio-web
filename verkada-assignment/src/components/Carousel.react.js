import React, { Component, useState, useEffect, useRef } from 'react';
//components
import Button from '../components/Button.react';
import Background from '../components/CarouselBG.react';
import CarouselProgressBar from './CarouselProgressBar.react';
//styles
import '../styles/Carousel.css';
import '../styles/Grid.css';
//Data
import  { CarouselSlides } from '../components/CarouselSlides';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = CarouselSlides.length;
  const TIMER = 6000;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (currentSlide == slideLength -1) {
        updateSlideState(0);
      }
      else {
        updateSlideState(currentSlide + 1);
      }

    }, TIMER);

    return () => {
      clearInterval(slideInterval);
    };

  }, [currentSlide]);

  // Setting up Carousel Slides from Data Source. Ideally this would come from a CMS. In this case, I've set up a quick JS directory.
  const getSlide = () => {
    return (
      <div className="CarouselContent Grid">
        <div className='CarouselText Col4'>
          <h1>
            {CarouselSlides[currentSlide].subHeader}
          </h1>
          <h2>
          {CarouselSlides[currentSlide].header}
          </h2>
          <p>
          {CarouselSlides[currentSlide].description}
          </p>
          <Button/>
        </div>
        <div className='CarouselImage'>
          <img className="Image" src={CarouselSlides[currentSlide].image}/>
        </div>
      </div>);
  }

  // Setting up Tabs dependant on the number of slides. This makes the entire section scalable and dependent on the data source.
  const getTabs = () => {
    const tabContainer = 
      <div id="carousel-tabs" className='CarouselTabs'>
        {CarouselSlides.map((slide, index) =>
          <a className={currentSlide === index ? "CarouselTab Active" : "CarouselTab Inactive"} key={index} onClick={() => updateSlideState(index, this)}>
            <div className='CarouselTabText'>
              <p>
                0{index + 1}
              </p>
            </div>
            <CarouselProgressBar timer={TIMER}/>
          </a>)}
      </div>
    return tabContainer;
  }

  const updateSlideState = (index, el) => {
    setCurrentSlide(index)
  }

  return (
    <section className="CarouselContainer">
      {getSlide()}
      {getTabs()}
      <Background/>
    </section>
  );
}