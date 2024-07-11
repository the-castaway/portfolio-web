import React, { useContext } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//transitionContext
import TransitionContext from '../context/transitionContext';

const TransitionTrigger = ({ children }) => {
    const location = useLocation();
    const { toggleEntered, toggleExit } = useContext(TransitionContext);
    let timeout;
    if (location.pathname === "/") {
        timeout = 1500;
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
                    onEntered={() => {
                        toggleEntered(true);
                    }}
                    onExit={() => {
                        toggleExit(true);
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