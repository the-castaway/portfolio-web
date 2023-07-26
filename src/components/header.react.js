import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
//styles
import '../styles/header.css';
import '../styles/App.css';

const Header = ({ headerContent }) => {
  gsap.registerPlugin(SplitText);
  let header = useRef(null);
  let quote = useRef(null);








  useEffect(() => {


    console.log(header);
    var tl = gsap.timeline(),
      mySplitText = new SplitText(header, { type: "words,chars" }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character

    console.log(chars);

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      //scale: 0,
      y: 200,
      rotationX: 0,
      // transformOrigin: "0% -50% 50",
      ease: "ease",
      stagger: 0.1
    });


    gsap.fromTo(
      header,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
    )
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