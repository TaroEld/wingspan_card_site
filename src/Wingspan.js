import React from 'react';
import WingspanImg from "./assets/gfx/wingspan.png";

const Wingspan = () => {
    const style = {
        width: "5rem",
        height: "1rem"
    }
    return (
        <div style={style}>
            <img className="containImage" src={WingspanImg} alt={WingspanImg}/>
        </div>
    );
};

export default Wingspan;