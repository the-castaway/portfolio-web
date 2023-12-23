import React, { useLayoutEffect, useRef } from 'react';
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
//assets
import Video from '../../media/home/home_sizzle.mp4'

import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

const Home = () => {
  //refs
  let homeMarquee = useRef(null);

  useLayoutEffect(() => {
    console.log('home');
    // const tl = gsap.timeline();
    // tl.from(homeMarquee, {
    //   duration: 0.5,
    //   opacity: 0,
    //   rotateZ: '15deg',
    //   y: 20,
    //   ease: "ease",
    //   stagger: 0.05
    // });
  })



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
