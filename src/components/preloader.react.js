import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preload = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const loader = document.getElementById('loader');
    const currentProgress = document.getElementById('current-progress');
    const newProgress = document.getElementById('new-progress');

    const onComplete = () => {
      // Hide the loader gracefully when the progress reaches 100%
      gsap.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete: () => (loader.style.display = 'none'),
      });
    };

    const updateProgress = (value) => {
      // Animate the number counter with GSAP
      const tl = gsap.timeline();
      tl.to(currentProgress, { opacity: 0, y: -10, duration: 0.5 });
      tl.to(newProgress, { opacity: 1, y: 0, duration: 0.5 });
      setProgress(value);
    };

    const getRandomIncrement = () => {
      // Generate a random increment between 5 and 20 for smooth and random progress
      return Math.floor(Math.random() * 16) + 5;
    };

    const simulateProgress = () => {
      // Simulate a loading progress from 0% to 100%
      const interval = setInterval(() => {
        if (!isComplete) {
          const increment = getRandomIncrement();
          const updatedProgress = Math.min(progress + increment, 100); // Clamp to a maximum of 100
          updateProgress(updatedProgress);

          if (updatedProgress >= 100) {
            setIsComplete(true);
            clearInterval(interval);
            onComplete();
          }
        }
      }, 500); // Adjust the interval as needed
    };

    simulateProgress();

    // Clean up event listeners or other resources as needed
    return () => {
      // Add any cleanup logic here
    };
  }, [progress, isComplete]);

  return (
    <div id="loader" style={loaderStyles}>
      <span id="current-progress" style={{ ...progressStyles, opacity: 1 - progress / 100 }}>
        {`${progress}%`}
      </span>
      <span id="new-progress" style={{ ...progressStyles, opacity: progress / 100 }}>
        {`${progress}%`}
      </span>
    </div>
  );
};

// Styles for the loader and progress number
const loaderStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'rgba(255, 255, 255, 0.8)',
  padding: '16px 32px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
};

const progressStyles = {
  color: '#007bff',
  position: 'absolute',
  top: 0,
  left: 0,
};

export default Preload;
