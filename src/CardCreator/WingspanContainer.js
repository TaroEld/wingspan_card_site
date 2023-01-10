import React from 'react';
import Wingspan from "../Wingspan";
import "./WingspanContainer.css"


const WingspanContainer = (props) => {
    return (
        <span className="wingspanContainer">
            <span className="genericTextColor">{props.wingspanNum + " cm"}</span>
            <Wingspan/>
        </span>
    );
};

export default WingspanContainer;