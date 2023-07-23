import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useLocation,
  useParams
} from "react-router-dom"
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { gsap } from "gsap";
//pages
import Home from './pages/home';
import About from './pages/about';
//components
import Nav from './components/nav.react'

const routes = [
  { path: '/', name: 'Home', Element: Home },
  { path: '/about', name: 'About', Element: About },
]

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
