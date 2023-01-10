import React from 'react';
import EggImg from "./assets/gfx/egg.png";


const Egg = () => {
    const style = {
        width: "1.5rem",
        height: "1.5rem"
    }
    return (
        <div style={style}>
            <img className="containImage" src={EggImg} alt={EggImg}/>
        </div>
    );
};

export default Egg;