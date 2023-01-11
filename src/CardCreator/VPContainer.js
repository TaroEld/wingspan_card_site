import React from 'react';
import VPImg from "../assets/gfx/point.png";
import "./VPContainer.css"

const VPContainer = ({vpNum}) => {
    return (
        <div className="vpContainer">
            <span className="genericTextColor">{vpNum}</span>
            <img className="vpImg" src={VPImg} alt={VPImg}/>
        </div>
    );
};

export default VPContainer;