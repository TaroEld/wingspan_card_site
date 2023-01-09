import React from 'react';
import CardImg from "./assets/gfx/card.png";

const Card = () => {
    return (
        <span>
            <img src={CardImg} alt={CardImg}/>
        </span>
    );
};

export default Card;