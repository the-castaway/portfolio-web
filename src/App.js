import React, { useEffect, useState } from "react";
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
import Archive from './pages/archive/archive';
import Project from "./pages/projects/project/project";
//components
import Nav from './components/nav.react'
import Cursor from './components/cursor.react'
import WIP from './components/wip.react'
//transitions
import TransitionTrigger from "./pages/transitionTrigger";
import { TransitionProvider } from "./context/transitionContext";
//assets
import { ThumbnailMedia } from "./media/media";
//projects 
import { Projects } from './pages/projects/projects';

//pre-load media
const preloadMedia = (thumbnails) => {
  const promises = thumbnails.map((thumbnail) => {
    return new Promise((resolve, reject) => {
      const media = new Image();
      media.src = thumbnail.src;
      setTimeout(() => {
        media.onload = resolve();
      }, 5100);
      media.onerror = reject;
    });
  });
  return Promise.all(promises);
};

const App = () => {
  const location = useLocation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    preloadMedia(ThumbnailMedia).then(() => {
      setLoaded(true);
    });
  }, [])

  return (
    <>
      <Nav location={location} />
      {!loaded ? (
        <Loader location={location} />
      ) : (
        <TransitionProvider>
          <Routes location={location}>
            <Route index key="home" path="/" exact element={<TransitionTrigger><Home /></TransitionTrigger>} />
            <Route key="about" path="about" exact element={<TransitionTrigger><About /></TransitionTrigger>} />
            <Route key="lab" path="lab" exact element={<TransitionTrigger><About /></TransitionTrigger>} />
            <Route key="showcase" path="showcase" exact element={<TransitionTrigger><Showcase /></TransitionTrigger>} />
            <Route key="archive" path="archive" exact element={<TransitionTrigger><Archive /></TransitionTrigger>} />
            {Projects.map((projectInfo) =>
              <Route key={projectInfo.name} path={projectInfo.href} exact element={<TransitionTrigger><Project project={projectInfo} /></TransitionTrigger>} />
            )}
          </Routes>
        </TransitionProvider>
      )}
      <Cursor />
      {/* <WIP /> */}
    </>
  );
}

export default App;
