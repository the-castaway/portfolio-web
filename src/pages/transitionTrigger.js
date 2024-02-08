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
    const { toggleCompleted } = useContext(TransitionContext);
    let timeout;
    if (location.pathname === "/") {
        timeout = 2100;
    }
    else if (location.pathname === "/about") {
        timeout = 700;
    }
    else if (location.pathname === "/showcase") {
        timeout = 600;
    }
    else { timeout = 500 }

    return (
        <>
            <SwitchTransition>
                <Transition
                    key={location.pathname}
                    timeout={timeout}
                    onEnter={() => {
                        toggleCompleted(false);
                    }}
                    onEntered={(node) => {
                        toggleCompleted(true);
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
        </>
    );
}

export default TransitionTrigger;