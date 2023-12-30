import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
//styles
import '../../styles/home.css';
//assets

const Home = () => {
  //refs
  let home = useRef(null);
  let homeMarquee = useRef(null);


  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    gsap.registerPlugin(SplitText);
    const marquee = home.querySelectorAll('.home-marquee');
    const tl = gsap.timeline(),
      marqueeSplitText = new SplitText(marquee, { type: "words" }),
      marqueeWords = marqueeSplitText.words; //an array of all the divs that wrap each character

    tl.from(marqueeWords, {
      duration: 0.4,
      opacity: 0,
      y: 20,
      ease: "ease",
      stagger: 0.1
    });
    tl.to(marquee, {
      duration: 30,
      x: '100%',
      ease: "power1.in",
      repeat: -1,
    });

  }, []);

  return (
    <div className='home' ref={el => home = el}>
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
