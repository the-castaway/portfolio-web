import { React } from 'react';
import { SwitchTransition, Transition, CSSTransition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//transitions
import { HomeTransitionEnter, HomeTransitionExit } from './home/homeTransition';
import { AboutTransitionEnter, AboutTransitionExit } from './about/aboutTransition';
import { ShowcaseTransitionEnter, ShowcaseTransitionExit } from './showcase/showcaseTransition';

const TransitionTrigger = ({ children }) => {
    const location = useLocation();
    return (
        <SwitchTransition>
            <Transition
                key={location.pathname}
                timeout={1600}
                onEnter={(node) => {
                    console.log(location.pathname)
                    if (location.pathname === "/") {
                        console.log("trigger:" + { node });
                        HomeTransitionEnter({ node });
                    }
                    else if (location.pathname === "/about") {
                        console.log("trigger:" + { node });
                        AboutTransitionEnter({ node });
                    }
                    else if (location.pathname === "/showcase") {
                        console.log("trigger:" + { node });
                        ShowcaseTransitionEnter({ node });
                    }
                }}
                onExit={(node) => {
                    if (location.pathname === "/") {
                        console.log("trigger:" + { node });
                        HomeTransitionExit({ node });
                    }
                    else if (location.pathname === "/about") {
                        console.log("trigger:" + { node });
                        AboutTransitionExit({ node });
                    }
                    else if (location.pathname === "/showcase") {
                        console.log("trigger:" + { node });
                        ShowcaseTransitionExit({ node });
                    }
                }}
            >
                {children}
            </Transition>
        </SwitchTransition>
    );
}

export default TransitionTrigger;