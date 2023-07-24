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
import RouteHelper from "./pages/routeHelper";
import Home from './pages/home';
import About from './pages/about';
//components
import Nav from './components/nav.react'

function App() {
  const location = useLocation();
  return (
    <div>
      <Nav />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={1200}>
          <Routes location={location}>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
