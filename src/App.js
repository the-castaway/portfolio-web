import React from "react";
import { useEffect, useState } from "react";
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

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 7000));
      // Toggle loading state
      setLoading((loading) => !loading);
    };
    loadData();
  }, [])


  return (
    <>
      <Nav />
      {loading ? (
        <Loader />
      ) : (
        <Routes location={location}>
          <Route index path="/" exact element={<TransitionTrigger><Home /></TransitionTrigger>} />
          <Route path="about" exact element={<TransitionTrigger><About /></TransitionTrigger>} />
          <Route path="showcase" exact element={<TransitionTrigger><Showcase /></TransitionTrigger>}>
            <Route path="project1" element={<Project1 />} />
            <Route path="project2" element={<Project2 />} />
          </Route>
        </Routes>
      )}
    </>
  );

}

export default App;
