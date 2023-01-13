import React from 'react';
import './SideBar.css'

function SideBar(props) {
    return (
        <div className="sideBar" >
            {props.children}
        </div>
    );
}

export default SideBar;