import "./CardTemplate.css"
import React from "react";
import HabitatContainer from './HabitatContainer';
import FoodContainer from './FoodContainer';
import DescriptionContainer from "./DescriptionContainer";
import VPContainer from "./VPContainer";
import EggContainer from "./EggContainer";
import WingspanContainer from "./WingspanContainer";
import NestContainer from "./NestContainer"
import BirdImageContainer from "./BirdImageContainer";

function CardTemplate({name, food, foodSeparator, habitat, vpNum, eggNum, nestType, wingspanNum, descriptionText, descriptionType, effectType, effectTag}) {
    return (
        <div className="cardTemplate genericTextColor">
            <HabitatContainer habitatArray = {habitat}/>
            <FoodContainer separator = {foodSeparator} foodArray = {food}/>
            <span className="birdName">{name}</span>
            <VPContainer vpNum = {vpNum}/>
            <EggContainer eggNum = {eggNum}/>
            <NestContainer Type={nestType}/>
            <WingspanContainer wingspanNum = {wingspanNum}/>
            <BirdImageContainer/>
            <DescriptionContainer descriptionText= {descriptionText} descriptionType={descriptionType} effectType={effectType} effectTag={effectTag}/>
        </div>
    );
}

export default CardTemplate;