import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
//assets

const Home = () => {
  //refs
  let homeMarquee = useRef(null);

  return (
    <div className='home'>
      <div className='home-marquee-container'>
        <div ref={el => homeMarquee = el} className='home-marquee'>
          <span className='home-marquee-text'>
            Designer -
          </span>
          <span className='home-marquee-text'>
            Developer -
          </span>
          <span className='home-marquee-text'>
            UI Designer -
          </span>
          <span className='home-marquee-text'>
            Web Designer -
          </span>
        </div>
      </div>
    </div >
  );
}

export default Home;
