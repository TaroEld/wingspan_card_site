import "./CardTemplate.css"
import React from "react";
import HabitatContainer from './HabitatContainer';
import FoodContainer from './FoodContainer';
import DescriptionContainer from "./DescriptionContainer";
import VPContainer from "./VPContainer";
import EggContainer from "./EggContainer";
import WingspanContainer from "./WingspanContainer";
import { Nest } from "../Nest";

function CardTemplate(props) {
    return (
        <div className="cardTemplate">
            <HabitatContainer habitatArray = {props.habitat}/>
            <FoodContainer separator = {props.foodSeparator} foodArray = {props.food}/>
            <span className="name">{props.name}</span>
            <VPContainer vpNum = {props.vpNum}/>
            <EggContainer eggNum = {props.eggNum}/>
            <div className="imageContainer"></div>
            <Nest Type={props.nestType}/>
            <WingspanContainer wingspanNum = {props.wingspanNum}/>
            <DescriptionContainer descriptionText= {props.descriptionText} descriptionType={props.descriptionType} effectType={props.effectType} effectTag={props.effectTag}/>
        </div>
    );
}

export default CardTemplate;