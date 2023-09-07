import { React } from 'react';
//components
import Header from '../../components/header.react';
//styles
import '../../styles/home.css';
//assets
import Video from '../../media/home/home_sizzle.mp4'

const Home = () => {

  return (
    <div className='home'>
      <div className='home-header'>
        <Header headerContent="Hello, I'm Jaime" />
      </div>
      <div className='home-video-container'>
        <div className='home-video-content'>
          <video id="home-video" className="home-video" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
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
