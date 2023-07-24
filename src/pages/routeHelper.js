import React from "react";
import {
    BrowserRouter as Router,
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
import Home from './home';
import About from './about';

const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
];

function RouteHelper() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={1200}
                            classNames='page'
                            unmountOnExit>
                            <div className='page'>
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> */}
        </Routes>
    )
}

export default RouteHelper;