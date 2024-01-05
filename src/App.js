import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
//pages
import Loader from "./pages/loader/loader";
import Home from './pages/home/home';
import About from './pages/about/about';
import Showcase from './pages/showcase/showcase';
import Project1 from './pages/projects/project1';
import Project2 from './pages/projects/project2';
//components
import Nav from './components/nav.react'
//transitions
import TransitionTrigger from "./pages/transitionTrigger";
import { TransitionProvider } from "./context/transitionContext";
//assets
import { Media } from "./media/media";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMedia = async (media) => {
      await new Promise((resolve, reject) => {
        const loadMedia = new Image()
        loadMedia.src = media.src
        // wait 2 seconds to simulate loading time
        loadMedia.onload = () =>
          setTimeout(() => {
            resolve(media.src)
          }, 7000);
        loadMedia.onerror = err => reject(err)
      })
    }

    Promise.all(Media.map(media => loadMedia(media)))
      .then(() => setLoading((loading) => !loading))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      <Nav location={location} />
      {loading ? (
        <Loader />
      ) : (
        <TransitionProvider>
          <Routes location={location}>
            <Route index path="/" exact element={<TransitionTrigger><Home media={Media} /></TransitionTrigger>} />
            <Route path="about" exact element={<TransitionTrigger><About media={Media} /></TransitionTrigger>} />
            <Route path="showcase" exact element={<TransitionTrigger><Showcase /></TransitionTrigger>}>
              <Route path="project1" element={<Project1 />} />
              <Route path="project2" element={<Project2 />} />
            </Route>
          </Routes>
        </TransitionProvider>
      )}
    </>
  );

}

export default App;
