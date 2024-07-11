import React, { useLayoutEffect, useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//transitionContext
import TransitionContext from '../../context/transitionContext';
//components
import Footer from '../../components/footer.react';
//styles
import '../../styles/home.css';
//assets
import { ThumbnailMedia } from "../../media/media";

const Home = () => {
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
  const homeInfoContainer = useRef(HTMLElement);
  const windowRef = useRef(window);
  //variables
  const navigate = useNavigate();
  //state
  const [enabled, setEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  //context
  const { exit } = useContext(TransitionContext);
  //plugins
  gsap.registerPlugin(SplitText);

  //intro animation timeline
  const getIntroTL = () => {
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
    }, 0)
    tl.from(homeInfoContainer.current, {
      duration: 0.8,
      opacity: 0,
      ease: 'ease',
      delay: 0.5,
      onComplete: () => {
        setEnabled(true);
      },
    }, 0)
    return tl;
  }

  //move parallax animation timeline
  const getMoveTL = (xPos, yPos) => {
    const tl = gsap.timeline();
    tl.to(homeCards.current, {
      duration: 0.5,
      rotationY: xPos * 50,
      rotationX: yPos * -50,
      rotationZ: xPos * 20,
      ease: "power1.Out",
    }, 0)
    tl.to(homeCard1.current, {
      duration: 0.5,
      y: yPos * 200,
      x: xPos * 200,
      ease: "power1.Out",
    }, 0)
    tl.to(homeCard2.current, {
      duration: 0.5,
      y: yPos * 150,
      x: xPos * 150,
      ease: "power2.Out",
    }, 0)
    tl.to(homeCard3.current, {
      duration: 0.5,
      y: yPos * 100,
      x: xPos * 100,
      ease: "power3.Out",
    }, 0)
    tl.to(homeCard4.current, {
      duration: 0.5,
      y: yPos * 50,
      x: xPos * 50,
      ease: "power4.Out",
    }, 0)
    tl.to(homeHeader.current, {
      duration: 0.5,
      rotate: xPos * 10,
      ease: "power4.Out",
    }, 0)
    return tl;
  }

  //ontro animation timeline
  const getOutroTL = () => {
    const tl = gsap.timeline();
    tl.to(homeCards.current, {
      duration: 0.5,
      rotationY: 0,
      rotationX: 0,
      rotationZ: 0,
      ease: 'ease',
    }, 0)
    tl.to(homeCard1.current, {
      duration: 0.5,
      y: 0,
      x: 0,
      rotate: 0,
      ease: "power1.Out",
    }, 0)
    tl.to(homeCard2.current, {
      duration: 0.5,
      y: 0,
      x: 0,
      rotate: 0,
      ease: "power2.Out",
    }, 0)
    tl.to(homeCard3.current, {
      duration: 0.5,
      y: 0,
      x: 0,
      rotate: 0,
      ease: "power3.Out",
    }, 0)
    tl.to(homeCard4.current, {
      duration: 0.5,
      y: 0,
      x: 0,
      rotate: 0,
      ease: "power4.Out",
    }, 0)
    tl.to(homeHeader.current, {
      duration: 0.5,
      rotate: 0,
      opacity: 0,
      scale: 0.3,
      ease: 'ease'
    }, 0)
    tl.to(homeCards.current, {
      duration: 0.5,
      delay: 0.5,
      yPercent: 100,
      opacity: 0,
      ease: 'ease',
    }, 0)
    tl.to(homeInfoContainer.current, {
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
      yPercent: 50,
      ease: 'ease',
    }, 0)
    return tl;
  }

  //handle enter click
  const handleEnter = () => {
    navigate('/showcase');
  }

  //intro 
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      getIntroTL();
    })
    return () => {
      ctx.revert();
    };
  }, [])

  //interactions 
  useLayoutEffect(() => {
    const ctx = gsap.context((context) => {
      context.add('mouseMoveAnim', (event) => {
        if (exit) return;
        const xPos = event.clientX / window.innerWidth - 0.5;
        const yPos = event.clientY / window.innerHeight - 0.5;
        setMousePos({ x: xPos, y: yPos });
        if (enabled) {
          getMoveTL(xPos, yPos).play();
        }
      })
    })
    windowRef.current.addEventListener('mousemove', ctx.mouseMoveAnim);
    return () => {
      ctx.revert();
      windowRef.current.removeEventListener('mousemove', ctx.mouseMoveAnim);
    };
  }, [enabled, exit])

  //outro 
  useEffect(() => {
    const ctx = gsap.context(() => { })
    if (exit) {
      gsap.killTweensOf([homeCards.current, homeCard1.current, homeCard2.current, homeCard3.current, homeCard4.current, homeHeader.current]);
      getMoveTL(mousePos.x, mousePos.y).progress(1);
      ctx.add(() => { getOutroTL() })
    }
    return () => {
      ctx.revert();
    };
  }, [exit, mousePos])

  return (
    <div className='home' onClick={handleEnter}>
      <div className='home-cards-container'>
        <div className='home-cards-content'>
          <div ref={homeCards} className='home-cards'>
            <div className='home-card-container'>
              <div ref={homeCard4} className='home-card'>
                <img className='home-card-media' key={ThumbnailMedia[3].key} src={ThumbnailMedia[3].src} loading="lazy" />
              </div>
            </div>
            <div className='home-card-container'>
              <div ref={homeCard3} className='home-card'>
                <img className='home-card-media' key={ThumbnailMedia[2].key} src={ThumbnailMedia[2].src} loading="lazy" />
              </div>
            </div>
            <div className='home-card-container'>
              <div ref={homeCard2} className='home-card'>
                <img className='home-card-media' key={ThumbnailMedia[1].key} src={ThumbnailMedia[1].src} loading="lazy" />
              </div>
            </div>
            <div className='home-card-container'>
              <div ref={homeCard1} className='home-card'>
                <img className='home-card-media' key={ThumbnailMedia[0].key} src={ThumbnailMedia[0].src} loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-header-container'>
        <div className='home-header-content' ref={homeHeader}>
          <div className='home-header-left'>
            <h1 className='home-header-text' ref={homeHeaderTextLeft}>
              <span>
                2024
              </span>
            </h1>
          </div>
          <div className='home-header-line' ref={homeHeaderLine} />
          <div className='home-header-right'>
            <h1 className='home-header-text' ref={homeHeaderTextRight}>
              <span>
                Folio
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className='home-info-container' ref={homeInfoContainer}>
        <div className='home-info-content'>
          <div className="home-info-text-node">
            <h4>
              Name
            </h4>
            <p>
              Jaime Castaneda
            </p>
          </div>
          <div className="home-info-text-node mobile-off">
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
          <div className="home-info-text-node mobile-off">
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
