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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const location = useLocation();

  return (
    <>
      <Nav location={location} />
      <TransitionProvider>
        <Routes location={location}>
          <Route index path="/" exact element={<TransitionTrigger><Home /></TransitionTrigger>} />
          <Route path="about" exact element={<TransitionTrigger><About /></TransitionTrigger>} />
          <Route path="showcase" exact element={<TransitionTrigger><Showcase /></TransitionTrigger>}>
            <Route path="project1" element={<Project1 />} />
            <Route path="project2" element={<Project2 />} />
          </Route>
        </Routes>
      </TransitionProvider>
    </>
  );

}

export default App;
