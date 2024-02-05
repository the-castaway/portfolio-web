import React, { useEffect, useState } from 'react';
//styles
import '../styles/location.css';

const Location = () => {
    //state
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // Convert hours to 12-hour format
            hours = hours % 12 || 12;

            const minutes = now.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes} ${ampm}`;
            setCurrentTime(formattedTime);
        };

        // Update the time initially
        updateTime();

        // Update the time every minute (60,000 milliseconds)
        const intervalId = setInterval(updateTime, 60000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='location'>
            <div className='location-icon' />
            <p className='location-text'>
                SF Bay Area, {currentTime}
            </p>
        </div>
    );
}

export default Location;