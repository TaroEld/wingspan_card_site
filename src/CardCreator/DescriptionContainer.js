import React from 'react';
import "./DescriptionContainer.css"
import {Effect} from '../Effect.js';
const DescriptionContainer = (props) => {
    // text= {props.descriptionText} type={props.descriptionType} effect={props.descriptionEffect} tag={props.effectTag}
    function getDescriptionType()
    {
        switch(props.descriptionType)
        {
            case "Effect":
                return <Effect text={props.descriptionText} type={props.effectType} tag={props.effectTag}/>
            case "Fluff":
                 return <span>{props.text}</span>
        }
    }
    return (
        <div className="descriptionContainer">
            {getDescriptionType()}
        </div>
    );
};

export default DescriptionContainer;