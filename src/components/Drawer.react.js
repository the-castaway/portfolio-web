import React, { useState, Component } from 'react';
//styles
import '../styles/Drawers.css';

function Drawer({header, content, startActive}) {
    const [isActive, setIsActive] = useState(startActive);
    return (
        <div className={isActive  ? "Drawer Active" : "Drawer Inactive"}>
            <div className="DrawerHeader" onClick={() => setIsActive(!isActive)}>
                <div>
                    {header}
                </div>
                <div>
                    {isActive ? '-' : '+'}
                </div>
                <div className='DrawerHeaderArrow'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1L11 6L6 11" stroke="#FF9900" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 5.99935H11" stroke="#FF9900" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
            <div className={isActive  ? "DrawerContent Active" : "DrawerContent Inactive"}>
                <div className='DrawerContentChild'>
                    {content}
                </div>
            </div>
        </div>
  );
}

export default Drawer;