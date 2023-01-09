import "./CardTemplate.css"
import FoodContainer from './FoodContainer';
import HabitatContainer from './HabitatContainer';
import React from "react";
import Description from "./Description";
import VPContainer from "./VPContainer";
import EggContainer from "./EggContainer";

function CardTemplate(props) {
    return (
        <div className="cardTemplate">
            <HabitatContainer habitatArray = {props.habitat}/>
            <FoodContainer separator = {props.foodSeparator} foodArray = {props.food}/>
            <span className="name">{props.name}</span>
            <VPContainer vpNum = {props.vpNum}/>
            <EggContainer eggNum = {props.eggNum}/>
            <Description text= {props.description}/>
            <div className="imageContainer"></div>
            <div className="wingspanContainer"></div>
            <div className="effectContainer"></div>
            <div className="nestContainer"></div> 
        </div>
    );
}

export default CardTemplate;