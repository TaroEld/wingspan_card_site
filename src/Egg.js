import React from 'react';
import EggImg from "./assets/gfx/egg.png";
import "./Egg.css"

const Egg = () => {
    return (
        <span className="span">
            <img src={EggImg} alt={EggImg}/>
        </span>
    );
};

export default Egg;