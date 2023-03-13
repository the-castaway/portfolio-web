import React, { Component } from 'react';
//styles
import '../styles/Button.css';

function Button() {
  return (
    <a className='Button' href="http://www.google.com" type="button">
        Learn More
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 7L8.59009 8.41L13.1701 13L8.59009 17.59L10.0001 19L16.0001 13L10.0001 7Z" fill="white"/>
        </svg>
    </a>
  );
}

export default Button;