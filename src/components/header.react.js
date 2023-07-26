import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
//import { SplitText } from "gsap/SplitText";
//styles
import '../styles/header.css';
import '../styles/App.css';

const Header = ({ headerContent }) => {
  //gsap.registerPlugin(SplitText);
  let header = useRef(null);








  useEffect(() => {

    // var tl = gsap.timeline(),
    //   mySplitText = new SplitText(header, { type: "words,chars" }),
    //   chars = mySplitText.chars; //an array of all the divs that wrap each character

    // console.log(chars);


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
    <h1 className='header'>
      <div ref={el => header = el}>
        {headerContent}
      </div>
    </h1>
  );
}

export default Header;