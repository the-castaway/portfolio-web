import { React } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//transitions
import { HomeTransitionEnter, HomeTransitionExit } from './home/homeTransition';
import { AboutTransitionEnter, AboutTransitionExit } from './about/aboutTransition';
import { ShowcaseTransitionEnter, ShowcaseTransitionExit } from './showcase/showcaseTransition';

const TransitionTrigger = ({ children }) => {
    const location = useLocation();
    let timeout;
    if (location.pathname === "/") {
        timeout = 1600;
    }
    else if (location.pathname === "/about") {
        timeout = 700;
    }
    else if (location.pathname === "/showcase") {
        timeout = 1000;
    }
    else { timeout = 500 }

    return (
        <SwitchTransition>
            <Transition
                key={location.pathname}
                timeout={timeout}
                onEnter={(node) => {
                    if (location.pathname === "/") {
                        HomeTransitionEnter({ node });
                    }
                    else if (location.pathname === "/about") {
                        AboutTransitionEnter({ node });
                    }
                    else if (location.pathname === "/showcase") {
                        ShowcaseTransitionEnter({ node });
                    }
                }}
                onExit={(node) => {
                    if (location.pathname === "/") {
                        HomeTransitionExit({ node });
                    }
                    else if (location.pathname === "/about") {
                        AboutTransitionExit({ node });
                    }
                    else if (location.pathname === "/showcase") {
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