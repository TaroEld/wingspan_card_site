import React from "react";
import "./CardTemplate.css"
import {EggContainer, DescriptionContainer, WingspanContainer, VPContainer, NestContainer, HabitatContainer, FoodContainer, BirdImageContainer} from "./Resources/ResourceContainers.js"

const EmptyTemplate = (props) => {
    return (
        <div className={`cardTemplate empty ${props.className}`}>
            {props.children}
        </div>
    )
}
function CardTemplate({name, food, foodSeparator, habitat, vpNum, eggNum, nestType, wingspanNum, effectText, effectType, effectTag, flavorText, className}) {
    return (
        <div className={`cardTemplate genericTextColor ${className}`}>
            <HabitatContainer habitatArray = {habitat}/>
            <FoodContainer separator = {foodSeparator} foodArray = {food}/>
            <span className="birdName">{name}</span>
            <VPContainer vpNum = {vpNum}/>
            <EggContainer eggNum = {eggNum}/>
            <NestContainer Type={nestType}/>
            <WingspanContainer wingspanNum = {wingspanNum}/>
            <BirdImageContainer/>
            <DescriptionContainer flavorText={flavorText} effectText = {effectText} effectType={effectType} effectTag={effectTag}/>
        </div>
    );
}

export {CardTemplate, EmptyTemplate};