import React from 'react';
import './SideBar.css'

function SideBar(props) {
    const onButtonClicked = (_button) =>
    {
        props.parentCallback(_button)
    }
    return (
        <div className="sideBar" >
            <button className="cardCreator" onClick={() => onButtonClicked("CardCreator")}>Card Creator</button>
            <button className="about" onClick={() => onButtonClicked("About")}>About</button>
        </div>
    );
}

export default SideBar;