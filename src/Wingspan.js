import React from 'react';
import WingspanImg from "./assets/gfx/wingspan.png";

const Wingspan = () => {
    const style = {
        width: "5rem",
        height: "1.5rem"
    }
    return (
        <div className="wingspanImg" style={style}>
            <img className="containImage" src={WingspanImg} alt="Wingspan"/>
        </div>
    );
};

export default Wingspan;