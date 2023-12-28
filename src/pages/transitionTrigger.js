import React, { useContext, useState, useEffect } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from "react-router-dom"
//transitionContext
import TransitionContext from '../context/transitionContext';
//transitions
import { HomeTransitionEnter, HomeTransitionEntered, HomeTransitionExit } from './home/homeTransition';
import { AboutTransitionEnter, AboutTransitionExit } from './about/aboutTransition';
import { ShowcaseTransitionEnter, ShowcaseTransitionExit } from './showcase/showcaseTransition';
//pages
import Loader from "./loader/loader";

const TransitionTrigger = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { toggleCompleted } = useContext(TransitionContext);
    let timeout;
    if (location.pathname === "/") {
        timeout = 1600;
    }
    else if (location.pathname === "/about") {
        timeout = 700;
    }
    else if (location.pathname === "/showcase") {
        timeout = 600;
    }
    else { timeout = 500 }

    useEffect(() => {
        // Loading function to load data or
        // fake it using setTimeout;
        const loadData = async () => {
            // Wait for two second
            await new Promise((r) => setTimeout(r, 7000));
            // Toggle loading state
            setLoading((loading) => !loading);
        };
        loadData();
    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <SwitchTransition>
                    <Transition
                        key={location.pathname}
                        timeout={timeout}
                        onEnter={(node) => {
                            toggleCompleted(false);
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
                        onEntered={(node) => {
                            console.log('transition-entered');
                            toggleCompleted(true);
                            if (location.pathname === "/") {
                                HomeTransitionEntered({ node });
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
            )}
        </>
    );
}

export default TransitionTrigger;