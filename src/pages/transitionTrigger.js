import React, { useContext } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//transitionContext
import TransitionContext from '../context/transitionContext';
//transitions
import { HomeTransitionExit } from './home/homeTransition';
import { AboutTransitionExit } from './about/aboutTransition';
import { ShowcaseTransitionExit } from './showcase/showcaseTransition';

const TransitionTrigger = ({ children }) => {
    const location = useLocation();
    const { toggleEntered, toggleExit } = useContext(TransitionContext);
    let timeout;
    if (location.pathname === "/") {
        timeout = 1000;
    }
    else if (location.pathname === "/about") {
        timeout = 200;
    }
    else if (location.pathname === "/showcase") {
        timeout = 200;
    }
    else { timeout = 200 }

    return (
        <>
            <SwitchTransition>
                <Transition
                    key={location.pathname}
                    timeout={timeout}
                    onEnter={() => {
                        toggleEntered(false);
                    }}
                    onEntered={(node) => {
                        toggleEntered(true);
                    }}
                    onExit={(node) => {
                        toggleExit(true);
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
                    onExited={() => {
                        toggleExit(false);
                    }}
                >
                    {children}
                </Transition>
            </SwitchTransition>
        </>
    );
}

export default TransitionTrigger;