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
import Project1 from './pages/projects/project1';
import Project2 from './pages/projects/project2';
//components
import Nav from './components/nav.react'
import Cursor from './components/cursor.react'
//transitions
import TransitionTrigger from "./pages/transitionTrigger";
import { TransitionProvider } from "./context/transitionContext";
//assets
import { Media } from "./media/media";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMedia = media => {
      return new Promise((resolve, reject) => {
        const loadMedia = new Image()
        loadMedia.src = media.src
        //wait 7 seconds to simulate loading time
        loadMedia.onload = () =>
          setTimeout(() => {
            resolve(media.src)
          }, 5100);
        loadMedia.onerror = err => reject(err)
      })
    }

    Promise.all(Media.map(media =>
      loadMedia(media)
    ))
      .then(() => setLoading((loading) => !loading))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <>
      <Nav location={location} />
      {loading ? (
        <Loader location={location} />
      ) : (
        <TransitionProvider>
          <Routes location={location}>
            <Route index key="home" path="/" exact element={<TransitionTrigger><Home /></TransitionTrigger>} />
            <Route key="about" path="about" exact element={<TransitionTrigger><About /></TransitionTrigger>} />
            <Route key="showcase" path="showcase" exact element={<TransitionTrigger><Showcase /></TransitionTrigger>}>
              <Route key="project1" path="project1" element={<Project1 />} />
              <Route key="project2" path="project2" element={<Project2 />} />
            </Route>
          </Routes>
        </TransitionProvider>
      )}
      <Cursor />
    </>
    // <>
    //   <Nav location={location} />

    //   <Loader />

    //   <TransitionProvider>
    //     <Routes location={location}>
    //       <Route index key="home" path="/" exact element={<TransitionTrigger><Home /></TransitionTrigger>} />
    //       <Route key="about" path="about" exact element={<TransitionTrigger><About /></TransitionTrigger>} />
    //       <Route key="showcase" path="showcase" exact element={<TransitionTrigger><Showcase /></TransitionTrigger>}>
    //         <Route key="project1" path="project1" element={<Project1 />} />
    //         <Route key="project2" path="project2" element={<Project2 />} />
    //       </Route>
    //     </Routes>
    //   </TransitionProvider>

    //   <Cursor />
    // </>
  );

}

export default App;
