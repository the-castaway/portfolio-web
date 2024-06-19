import React, { useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//components
import Footer from '../../components/footer.react';
//styles
import '../../styles/home.css';
//assets
import { Media } from "../../media/media";

const Home = () => {
  //state
  const [enabled, setEnabled] = useState(false);
  //refs
  const homeHeader = useRef(HTMLElement);
  const homeHeaderTextLeft = useRef(HTMLElement);
  const homeHeaderTextRight = useRef(HTMLElement);
  const homeHeaderLine = useRef(HTMLElement);
  const homeCards = useRef(HTMLElement);
  const homeCard1 = useRef(HTMLElement);
  const homeCard2 = useRef(HTMLElement);
  const homeCard3 = useRef(HTMLElement);
  const homeCard4 = useRef(HTMLElement);
  //variables
  const navigate = useNavigate();
  //plugins
  gsap.registerPlugin(SplitText);

  //home cards intro animation timeline
  const getHomeCardsIntroTL = () => {
    const tl = gsap.timeline();
    tl.to(homeCards.current, {
      duration: 0.8,
      y: 0,
      rotate: 0,
      ease: 'ease',
    }, 0)
    tl.to(homeCards.current, {
      duration: 0.3,
      opacity: 1,
      ease: 'ease',
    }, 0)
    tl.to(homeCard4.current, {
      duration: 0.8,
      ease: 'ease',
      rotate: '-30deg',
      delay: 0,
    }, 0)
    tl.to(homeCard3.current, {
      duration: 0.8,
      ease: 'ease',
      rotate: '-20deg',
      delay: 0,
    }, 0)
    tl.to(homeCard2.current, {
      duration: 0.8,
      ease: 'ease',
      rotate: '-10deg',
      delay: 0,
      onComplete: () => {
        setEnabled(true);
      },
    }, 0)
    return tl;
  }

  //mouse move parallax animation timeline
  const getMouseMoveTL = (event) => {
    let xPos = event.clientX / window.innerWidth - 0.5,
      yPos = event.clientY / window.innerHeight - 0.5;
    const tl = gsap.timeline();
    tl.to(homeCard1.current, {
      duration: 0.5,
      rotationY: xPos * 50,
      rotationX: yPos * -50,
      rotate: xPos * 40,
      y: yPos * 200,
      x: xPos * 200,
      ease: "power1.Out"
    }, 0)
    tl.to(homeCard2.current, {
      duration: 0.5,
      rotationY: xPos * 50,
      rotationX: yPos * -50,
      rotate: xPos * 30,
      y: yPos * 150,
      x: xPos * 150,
      ease: "power2.Out"
    }, 0)
    tl.to(homeCard3.current, {
      duration: 0.5,
      rotationY: xPos * 50,
      rotationX: yPos * -50,
      rotate: xPos * 20,
      y: yPos * 100,
      x: xPos * 100,
      ease: "power3.Out"
    }, 0)
    tl.to(homeCard4.current, {
      duration: 0.5,
      rotationY: xPos * 50,
      rotationX: yPos * -50,
      rotate: xPos * 10,
      y: yPos * 50,
      x: xPos * 50,
      ease: "power4.Out"
    }, 0)
    tl.to(homeHeader.current, {
      duration: 0.5,
      rotate: xPos * 10,
      ease: "power4.Out"
    }, 0)
    return tl;
  }

  //intro 
  useLayoutEffect(() => {
    //gsap animations
    const ctx = gsap.context((context) => {
      getHomeCardsIntroTL();
    })
    return () => {
      ctx.revert();
    };
  }, [])

  //interactions 
  useLayoutEffect(() => {
    //gsap animations
    const ctx = gsap.context((context) => {
      context.add('mouseMoveAnim', (event) => {
        getMouseMoveTL(event);
      })
    })
    const handleMouseMove = (event) => {
      if (!enabled) return;
      ctx.mouseMoveAnim(event)
    };
    //add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled])

  //handle enter click
  const handleEnter = () => {
    navigate('/showcase');
  }

  return (
    <div className='home' onClick={handleEnter}>
      <div className='home-cards-container'>
        <div ref={homeCards} className='home-cards'>
          <div className='home-card-container'>
            <div ref={homeCard4} className='home-card'>
              <img className='about-headshot' key={Media[3].key} src={Media[3].src} />
            </div>
          </div>
          <div className='home-card-container'>
            <div ref={homeCard3} className='home-card'>
              <img className='about-headshot' key={Media[2].key} src={Media[2].src} />
            </div>
          </div>
          <div className='home-card-container'>
            <div ref={homeCard2} className='home-card'>
              <img className='about-headshot' key={Media[1].key} src={Media[1].src} />
            </div>
          </div>
          <div className='home-card-container'>
            <div ref={homeCard1} className='home-card'>
              <img className='about-headshot' key={Media[1].key} src={Media[0].src} />
            </div>
          </div>
        </div>
      </div>
      <div className='home-header-container'>
        <div className='home-header' ref={homeHeader}>
          <h1 className='home-header-text' ref={homeHeaderTextLeft}>
            <span>
              2024
            </span>
          </h1>
          <div className='home-header-line' ref={homeHeaderLine} />
          <h1 className='home-header-text' ref={homeHeaderTextRight}>
            <span>
              Folio
            </span>
          </h1>
        </div>
      </div>
      <div className='home-info-container'>
        <div className='home-info-content'>
          <div className="home-info-text-node">
            <h4>
              Name
            </h4>
            <p>
              Jaime Castaneda
            </p>
          </div>
          <div className="home-info-text-node">
            <h4>
              Status
            </h4>
            <div className='home-info-text-node-status'>
              <div className='home-info-text-node-status-icon' />
              <p>
                Available
              </p>
            </div>
          </div>
          <div className="home-info-text-node">
            <h4>
              Occupation
            </h4>
            <p>
              Designer / Developer
            </p>
          </div>
          <div className="home-info-text-node">
            <h4>
              Currently
            </h4>
            <p>
              Designer / Engineer @ Meta
            </p>
          </div>
        </div>
      </div>
      <Footer instruction={"Click Anywhere"} scroll={true} />
    </div >
  );
}

export default Home;
