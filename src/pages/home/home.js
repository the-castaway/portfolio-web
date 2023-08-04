import { React, useEffect, useState } from 'react';
import { SwitchTransition, Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';

const Home = () => {
  const location = useLocation();
  //const [isActive, setIsActive] = useState(false);

  return (
    <div className='home'>
      <div className='home-header'>
        <Header headerContent="Hello, I'm Jaime" />
      </div>
    </div>
  );
}

export default Home;
