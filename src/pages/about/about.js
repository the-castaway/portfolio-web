import { React, useEffect, useState } from 'react';
import { SwitchTransition, Transition, CSSTransition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';

const About = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='about'>
      <div className='home-header'>
        <Header headerContent="About" isActive={isActive} />
      </div>
    </div>

  );
}

export default About;