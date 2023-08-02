import { React, useEffect, useState } from 'react';
import { SwitchTransition, Transition, CSSTransition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//components
import Header from '../components/header.react';
//styles
import '../styles/home.css';

const About = () => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  return (
    <SwitchTransition>
      <Transition key={location.key}
        timeout={3000}
        onEnter={() => {
          console.log('enter', "isActive" + isActive)
          setIsActive((prevIsActive) => !prevIsActive)

        }}
        onExit={() => {
          console.log('exit', "isActive" + isActive)
          setIsActive((prevIsActive) => !prevIsActive)
        }}>
        <div className='home'>
          <div className='home-header'>
            <Header headerContent="About" isActive={isActive} />
          </div>
        </div>
      </Transition>
    </SwitchTransition>
  );
}

export default About;