import React, { Component } from 'react';
//styles
import '../styles/DrawersBG.css';
//assets
import background_circle from '../media/background_circle.png';
import background_pattern from '../media/background_pattern.png';

function DrawersBG() {
  return (
    <div className="DrawersBG">
        <img className="DrawersBGCircle" src={background_circle}/>
        <img className="DrawersBGPattern" src={background_pattern}/>
    </div>
  );
}

export default DrawersBG;