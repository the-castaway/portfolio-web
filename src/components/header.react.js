import React, { useEffect, useRef } from 'react';
import logo from '../media/logo.svg';
import '../styles/App.css';
import { gsap } from 'gsap';

const Header = ({ headerContent }) => {
  let header = useRef(null);

  useEffect(() => {
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
    <h1>
      <div ref={el => header = el} className='header'>
        {headerContent}
      </div>
    </h1>
  );
}

export default Header;