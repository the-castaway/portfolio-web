import React, { createContext } from 'react';
import { useState } from 'react';

const TransitionContext = createContext({ entered: false, exited: false, });

export const TransitionProvider = ({ children }) => {
    const [entered, setEntered] = useState(false);
    const [exit, setExit] = useState(false);

    const toggleEntered = (value) => {
        setEntered(value);
    };

    const toggleExit = (value) => {
        setExit(value);
    };

    return (
        <TransitionContext.Provider
            value={{
                toggleEntered,
                entered,
                toggleExit,
                exit,
            }}
        >
            {children}
        </TransitionContext.Provider>
    );
};

export default TransitionContext;
