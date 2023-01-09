import React from 'react';
import './SideBar.css'

function SideBar(props) {
    const onButtonClicked = (_button) =>
    {
        props.parentCallback(_button)
    }
    return (
        <div className="buttonContainer" >
            <button className="tierList" onClick={() => onButtonClicked("TierList")}>Tier List</button>
            <button className="cardCreator" onClick={() => onButtonClicked("CardCreator")}>Card Creator</button>
        </div>
    );
}

export default SideBar;