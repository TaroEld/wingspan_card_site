import React from 'react';
import "./BirdImageContainer.css"
import TemplateImage from "../assets/gfx/template_bird_image.png";

const BirdImageContainer = ({}) => {
    return (
        <div className="birdImageContainer">
            <img src={TemplateImage}/>
        </div>
    );
};

export default BirdImageContainer;