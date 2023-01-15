import React, { useState } from 'react';
import "./ResourceContainers.css"
import {Effect} from './Effect.js';
import TemplateImage from "../assets/gfx/template_bird_image.png";
import {Egg, Habitat, Nest, Food, Wingspan, VP} from "./Resources.js"

const DescriptionContainer = (props) => {
    const [entryToggle, setEntryToggle] = useState(true)
    const toggleEntryType = () => {
        setEntryToggle(!entryToggle)
    }
    const reduceText = () => {
        if ((entryToggle && props.effectText.length > 100) || (!entryToggle && props.flavorText.length > 100))
            return "reducetext"
        return ""
    }
    return (
        <div className={`descriptionContainer ${reduceText()}`} onClick={toggleEntryType}>
            {entryToggle && <Effect text={props.effectText} type={props.effectType} tag={props.effectTag}/>}
            {!entryToggle &&  <span className="genericTextColor">{props.flavorText}</span>}
        </div>
    );
};

const EggContainer = (props) => {
    const getEggs = () => {
        const ret = []
        for (let index = 0; index < props.eggNum; index++) {
            ret.push(<Egg key={index}/>)
        }
        return ret;
    }
    return (
        <div className="eggContainer">
            {getEggs()}
        </div>
    );
};
const WingspanContainer = ({wingspanNum}) => {
    return (
        <span className="wingspanContainer">
            <span className="genericTextColor">{wingspanNum + " cm"}</span>
            <Wingspan/>
        </span>
    );
};
const VPContainer = ({vpNum}) => {
    return (
        <div className="vpContainer">
            <span>{vpNum}</span>
            <VP/>
        </div>
    );
};
const NestContainer = (props) => {
    return (
        <div className="nestContainer">
            <Nest Type={props.Type}/>
        </div>
    );
};
function HabitatContainer({habitatArray}) {
    const getHabitat = () => {
        let idx = 0;
        return habitatArray.map((_type) => {
            return <Habitat key = {idx++} Type={_type}/>
        })
    }
    return (
        <div className="habitatContainer">
            {getHabitat()}
        </div>
    );
}
function FoodContainer({separator, foodArray}) {
    const style= {
        width: "1rem",
        height: "1rem",
        display: "inline-block"
    }
    const getFood = () => {
        // Either + or / depending if the bird requires multiple foods or can choose between multiple
        let idx = 0;
        // Iterate over foods and add each as component followed by separator character
        const ret = foodArray.map((_foodType) => {
            const innerRet = []
            innerRet.push(<Food key = {idx++} style={style} Type={_foodType} Size = "small"/>)
            innerRet.push(<span key = {idx++} >{separator}</span>)
            return innerRet;
        })
        // Remove last separator
        if (ret.length > 0)
            ret[ret.length - 1].pop()
        return ret
    }
    return (
        <div className="foodContainer">
            {getFood()}
        </div>
    );
}
const BirdImageContainer = () => {
    return (
        <div className="birdImageContainer">
            <img src={TemplateImage} alt="template"/>
        </div>
    );
};

export {EggContainer, DescriptionContainer, WingspanContainer, VPContainer, NestContainer, HabitatContainer, FoodContainer, BirdImageContainer};
