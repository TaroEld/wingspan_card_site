import React from "react";
import "./CardTemplate.css"
import {EggContainer, DescriptionContainer, WingspanContainer, VPContainer, NestContainer, HabitatContainer, FoodContainer, BirdImageContainer} from "./Resources/ResourceContainers.js"

function CardTemplate({name, scientificName, food, foodSeparator, habitat, vpNum, eggNum, nestType, wingspanNum, effectText, effectType, effectTag, flavorText, className}) {
    return (
        <div className={`cardTemplate genericTextColor ${className}`}>
            <HabitatContainer habitatArray = {habitat}/>
            <FoodContainer separator = {foodSeparator} foodArray = {food}/>
            <span className="birdName">{name}</span>
            <span className="scientificName">{scientificName}</span>
            <VPContainer vpNum = {vpNum}/>
            <EggContainer eggNum = {eggNum}/>
            <NestContainer Type={nestType}/>
            <WingspanContainer wingspanNum = {wingspanNum}/>
            <BirdImageContainer/>
            <DescriptionContainer flavorText={flavorText} effectText = {effectText} effectType={effectType} effectTag={effectTag}/>
        </div>
    );
}

export default CardTemplate;