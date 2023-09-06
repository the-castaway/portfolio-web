import { React, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom"
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
//assets
import Video from '../../media/home/home_sizzle.mp4'
//import Sizzle from '../../../public/media/home_sizzle.mp4'

const Home = () => {
  const location = useLocation();

  return (
    <div className='home'>
      <div className='home-header'>
        <Header headerContent="Hello, I am Jaime" />
      </div>
      <div className='home-video-container'>
        <div className='home-video-content'>
          <video id="home-video" className="home-video" autoPlay loop muted>
            <source src='media/home_sizzle.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='home-footer'>
        <div className='home-footer-instruction'>
          <p>
            Click to Enter
          </p>
        </div>
        <div className='home-footer-location'>
          <div className='home-footer-location-pin' />
          <p>
            SF Bay Area
          </p>
        </div>
      </div>
    </div >
  );
}

export default Home;
