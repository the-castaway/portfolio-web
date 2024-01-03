import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
//styles
import '../../styles/home.css';
//assets
import metaNews from '../../media/thumbnails/thumbnail_meta_news.webp'
import vr4g from '../../media/thumbnails/thumbnail_vr4g.webp'
import rbs from '../../media/thumbnails/thumbnail_rbs_uth.webp'
import rsvp from '../../media/thumbnails/thumbnail_rsvp.webp'

const Home = () => {
  //state
  const [enabled, setEnabled] = useState(false);
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
  //date
  const now = new Date();
  const pstOffset = -8 * 60; // PST is UTC-8
  const pstTime = new Date(now.getTime());

  let hours = pstTime.getHours();
  const minutes = pstTime.getMinutes();
  const period = hours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  const formattedTime = formatTime(hours, minutes < 10 ? '0' + minutes : minutes, period);

  function formatTime(hours, minutes, period) {
    return `${hours}:${minutes}${period}`;
  }

  //enter animation
  useEffect(() => {
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

  //parallax trigger
  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      if (!enabled) return;
      mouseAnimation(event);
    });
  }, [enabled]);

  //marquee trigger
  useEffect(() => {
    const marqueeContentClone = homeMarqueeContent.cloneNode(true);
    homeMarquee.append(marqueeContentClone);
    const marqueeContentWidth = parseInt(getComputedStyle(homeMarqueeContent).getPropertyValue("width"), 10)
    const marqueeTL = gsap.timeline();

    //marquee animation
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
    marqueeTL.fromTo(homeMarquee.children, {
      x: 0,
    }, {
      duration: 30,
      x: () => { return marqueeContentWidth * -1 },
      ease: "none",
      repeat: -1,
    }, 0);

  }, []);

  return (
    <div className='home'>
      <div className='home-cards-container'>
        <div ref={el => homeCards = el} className='home-cards'>
          <div ref={el => homeCard4 = el} className='home-card'>
            <img className='about-headshot' src={rsvp} />
          </div>
          <div ref={el => homeCard3 = el} className='home-card'>
            <img className='about-headshot' src={rbs} />
          </div>
          <div ref={el => homeCard2 = el} className='home-card'>
            <img className='about-headshot' src={vr4g} />
          </div>
          <div ref={el => homeCard1 = el} className='home-card'>
            <img className='about-headshot' src={metaNews} />
          </div>
        </div>
      </div>
      <div className='home-marquee-container'>
        <div ref={el => homeMarquee = el} className='home-marquee'>
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
          Jaime Castaneda <span className='home-info-description-dark'>Portfolio’24</span>
        </h2>
        <div className='home-info-footer'>
          <div className='home-info-footer-cta'>
            <span>Click to Start</span>
          </div>
          <div className='home-info-footer-location'>
            <div className='home-info-footer-location-icon' />
            SF Bay Area, {formattedTime}
          </div>
        </div>


      </div>
    </div >
  );
}

export default Home;
