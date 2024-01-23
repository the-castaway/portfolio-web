import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom"
//components
import Location from '../../components/location.react';
import Instruction from '../../components/instruction.react';
//styles
import '../../styles/home.css';
//assets
import { Media } from "../../media/media";

const Home = () => {
  //state
  const [enabled, setEnabled] = useState(false);
  const [marqueeWidth, setMarqueeWidth] = useState(null | Number);
  //refs
  let homeMarquee = useRef(HTMLElement);
  let homeMarqueeContent = useRef(HTMLElement);
  let homeCards = useRef(HTMLElement);
  let homeCard1 = useRef(HTMLElement);
  let homeCard2 = useRef(HTMLElement);
  let homeCard3 = useRef(HTMLElement);
  let homeCard4 = useRef(HTMLElement);
  //plugins
  gsap.registerPlugin(SplitText);

  //enter animation
  useEffect(() => {
    window.scrollTo(0, 0);
    const enterTL = gsap.timeline();

    //cards animation
    enterTL.to(homeCards, {
      duration: 0.8,
      y: 0,
      rotate: 0,
      opacity: 1,
      ease: 'ease',
    }, 0)
    enterTL.to(homeCard4, {
      duration: 0.8,
      ease: 'ease',
      rotate: '-30deg',
      delay: 0,
    }, 0)
    enterTL.to(homeCard3, {
      duration: 0.8,
      ease: 'ease',
      rotate: '-20deg',
      delay: 0,
    }, 0)
    enterTL.to(homeCard2, {
      duration: 0.8,
      ease: 'ease',
      rotate: '-10deg',
      delay: 0,
    }, 0)

  }, [gsap]);

  //parallax animation
  const mouseAnimation = (event) => {
    let xPos = event.clientX / window.innerWidth - 0.5,
      yPos = event.clientY / window.innerHeight - 0.5;

    const parallaxTL = gsap.timeline();

    if (homeCard1 && homeCard2 && homeCard3 && homeCard4 && homeMarquee) {
      parallaxTL.to(homeCard1, {
        duration: 0.5,
        rotationY: xPos * 50,
        rotationX: yPos * -50,
        rotate: xPos * 40,
        y: yPos * 400,
        x: xPos * 400,
      }, 0)
      parallaxTL.to(homeCard2, {
        duration: 0.5,
        rotationY: xPos * 50,
        rotationX: yPos * -50,
        rotate: xPos * 30,
        y: yPos * 300,
        x: xPos * 300,
      }, 0)
      parallaxTL.to(homeCard3, {
        duration: 0.5,
        rotationY: xPos * 50,
        rotationX: yPos * -50,
        rotate: xPos * 20,
        y: yPos * 200,
        x: xPos * 200,
      }, 0)
      parallaxTL.to(homeCard4, {
        duration: 0.5,
        rotationY: xPos * 50,
        rotationX: yPos * -50,
        rotate: xPos * 10,
        y: yPos * 100,
        x: xPos * 100,
      }, 0)
      parallaxTL.to(homeMarquee, {
        duration: 0.5,
        rotate: xPos * 10,
      }, 0)
    }
  }

  //parallax trigger
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!enabled) return;
      mouseAnimation(event);
    };
    window.addEventListener('mousemove', (event) => handleMouseMove(event));
    return () => {
      window.removeEventListener('mousemove', (event) => handleMouseMove(event));
    }
  });

  //marquee animation
  const marqueeTL = gsap.timeline();

  //marquee initial setup
  useEffect(() => {
    if (!homeMarquee || !homeMarqueeContent) return;
    const marqueeContentClone = homeMarqueeContent.cloneNode(true);
    homeMarquee.append(marqueeContentClone);
    const marqueeContentWidth = parseInt(
      getComputedStyle(homeMarqueeContent).getPropertyValue("width"),
      10
    );
    setMarqueeWidth(marqueeContentWidth);
    marqueeTL.to(homeMarquee, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "ease",
      delay: 0.8,
      onComplete: () => {
        setEnabled(true);
      },
    }, 0);
  }, []);

  //marquee trigger
  useEffect(() => {
    const homeMarqueeID = document.getElementById('homeMarquee')
    const playMarquee = () => {
      marqueeTL.fromTo(homeMarqueeID.children, {
        x: 0,
      }, {
        duration: 30,
        x: marqueeWidth * -1,
        ease: "none",
        repeat: -1,
      }, 0);
    }
    const handleResize = () => {
      if (homeMarqueeID) {
        const marqueeContentWidth = parseInt(
          getComputedStyle(homeMarqueeID.children[0]).getPropertyValue("width"),
          10
        );
        setMarqueeWidth(marqueeContentWidth);
        playMarquee();
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [marqueeWidth]);

  return (
    <Link className='home' to="/showcase" exact='true'>
      <div className='home-cards-container'>
        <div ref={el => homeCards = el} className='home-cards'>
          <div className='home-card-container'>
            <div ref={el => homeCard4 = el} className='home-card'>
              <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
            </div>
          </div>
          <div className='home-card-container'>
            <div ref={el => homeCard3 = el} className='home-card'>
              <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
            </div>
          </div>
          <div className='home-card-container'>
            <div ref={el => homeCard2 = el} className='home-card'>
              <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
            </div>
          </div>
          <div className='home-card-container'>
            <div ref={el => homeCard1 = el} className='home-card'>
              <img className='about-headshot' key={Media[0].key} src={Media[0].src} />
            </div>
          </div>
        </div>
      </div>
      <div className='home-marquee-container'>
        <div id='homeMarquee' ref={el => homeMarquee = el} className='home-marquee'>
          <div ref={el => homeMarqueeContent = el} className='home-marquee-content'>
            <span className='home-marquee-text'>
              designer
            </span>
            <span className='home-marquee-text'>
              -
            </span>
            <span className='home-marquee-text'>
              developer
            </span>
            <span className='home-marquee-text'>
              -
            </span>
            <span className='home-marquee-text'>
              creator
            </span>
            <span className='home-marquee-text'>
              -
            </span>
            <span className='home-marquee-text'>
              director
            </span>
            <span className='home-marquee-text'>
              -
            </span>
          </div>
        </div>
      </div>
      <div className='home-info-container'>
        <h2 className='home-info-description'>
          Jaime Castaneda <span className='home-info-description-dark'>Folio’24</span>
        </h2>
        <div className='home-info-footer'>
          <Instruction />
          <Location />
        </div>
      </div>
    </Link >
  );
}

export default Home;
