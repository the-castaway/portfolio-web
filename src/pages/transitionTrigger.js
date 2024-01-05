import React, { useContext, useState, useEffect } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation, useNavigate } from "react-router-dom"
//transitionContext
import TransitionContext from '../context/transitionContext';
//transitions
import { HomeTransitionEnter, HomeTransitionEntered, HomeTransitionExit } from './home/homeTransition';
import { AboutTransitionEnter, AboutTransitionExit } from './about/aboutTransition';
import { ShowcaseTransitionEnter, ShowcaseTransitionExit } from './showcase/showcaseTransition';
//pages
import Loader from "./loader/loader";

const TransitionTrigger = ({ children }) => {
    //const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { toggleCompleted } = useContext(TransitionContext);
    const navigate = useNavigate();
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

    // useEffect(() => {
    //     // Loading function to load data or
    //     // fake it using setTimeout;
    //     const loadData = async () => {
    //         // Wait for two second
    //         await new Promise((r) => setTimeout(r, 7000));
    //         // Toggle loading state
    //         setLoading((loading) => !loading);
    //     };
    //     loadData();

    // }, []);

    return (
        <>
            {/* {loading ? (
                <Loader />
            ) : ( */}
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
            {/* )} */}
        </>
    );
}

export default TransitionTrigger;