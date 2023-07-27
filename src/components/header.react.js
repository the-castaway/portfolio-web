import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//styles
import '../styles/header.css';
import '../styles/App.css';

const Header = ({ headerContent }) => {
  gsap.registerPlugin(SplitText);
  let header = useRef(null);

  useEffect(() => {

    var tl = gsap.timeline(),
      mySplitText = new SplitText(header, { type: "words,chars" }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      y: 200,
      rotationX: 0,
      ease: "ease",
      stagger: 0.1
    });

  }, [header])


  return (

    <div className='header-container'>
      <h1 className='header'>
        <div ref={el => header = el}>
          {headerContent}
        </div>
      </h1>
    </div>

  );
}

export default Header;