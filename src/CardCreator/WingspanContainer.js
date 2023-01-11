import React from 'react';
import Wingspan from "../Wingspan";
import "./WingspanContainer.css"


const WingspanContainer = ({wingspanNum}) => {
    return (
        <span className="wingspanContainer">
            <span className="genericTextColor">{wingspanNum + " cm"}</span>
            <Wingspan/>
        </span>
    );
};

export default WingspanContainer;