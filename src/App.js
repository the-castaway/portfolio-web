import React from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { gsap } from "gsap";
//pages
import Home from './pages/home';
import About from './pages/about';
import Showcase from './pages/showcase';
//pages
import Project1 from './pages/projects/project1';
import Project2 from './pages/projects/project2';
//components
import Nav from './components/nav.react'

function App() {
  const location = useLocation();
  console.log(location, location.key);
  return (
    <>
      <Nav />
      {/* <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
            <Route path="/" exact element={<Home />} />
            <Route path="about" exact element={<About />} />
            <Route path="showcase/*" exact element={<Showcase />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup> */}

      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={3000}>
          <Routes location={location}>
            <Route path="/" exact element={<Home />} />
            <Route path="about" exact element={<About />} />
            <Route path="showcase" exact element={<Showcase />}>
              <Route path="project1" element={<Project1 />} />
              <Route path="project2" element={<Project2 />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
