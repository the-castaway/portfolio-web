import { React, useRef, useEffect } from 'react';
import { useLocation } from "react-router-dom"
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
//assets
import Video from '../../media/home/home_sizzle.mp4'

const Home = () => {
  const location = useLocation();
  //let video = useRef(null);

  useEffect(() => {
    const video = document.getElementById("home-video");

    video.setAttribute("playsinline", "");
    video.setAttribute("muted", "");
    video.play();
    console.log(video)
    //video.play();
  })


  return (
    <div className='home'>
      <div className='home-header'>
        <Header headerContent="Hello, I'm Jaime" />
      </div>
      <div className='home-video-container'>
        <div className='home-video-content'>
          <video id="home-video" className="home-video" loop muted controlsList='nodowload'>
            <source src={Video} type="video/mp4"></source>
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
