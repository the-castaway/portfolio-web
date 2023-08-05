import { React, useEffect, useState } from 'react';
import { SwitchTransition, Transition, CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
//assets
import Video from '../../media/home/home_sizzle.mp4'

const Home = () => {
  const location = useLocation();

  return (
    <div className='home'>
      <div className='home-header'>
        <Header headerContent="Hello, I'm Jaime" />
      </div>
      <div className='home-video-container'>
        <video className="home-video-content" loop autoPlay muted>
          <source src={Video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Home;
