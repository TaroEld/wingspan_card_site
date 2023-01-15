import React from 'react';
import './TopBar.css'

function TopBar(props) {
    return (
        <div className="topBar" >
            {props.children}
        </div>
    );
}

export default TopBar;