import React, { useState, useEffect, useRef } from "react";
import CardTemplate from './CardCreator/CardTemplate';
import FoodContainer from "./CardCreator/FoodContainer";
import "./CardCreatorScreen.css"
import { Food, FoodTypes } from "./Food";
import {birdlist} from "./birdlist_mini.js"
import { Nest, NestTypes } from "./Nest";
import { EffectTypes } from "./Effect";

function CardCreatorScreen(props) {
    const [name, setName] = useState("Test Name");
    const [food, setFood] = useState(["Wild"]);
    const [nestType, setNestType] = useState("Star");
    const [vpNum, setVpNum] = useState(6);
    const [eggNum, setEggNum] = useState(6);
    const [wingspanNum, setWingspanNum] = useState(100);
    const [foodSeparator, setFoodSeparator] = useState("/");
    const [habitat, setHabitat] = useState(["Forest", "Wet", "Grass"]);

    const [descriptionText, setDescriptionText] = useState("wild fish card tuck");
    const [descriptionType, setDescriptionType] = useState("Effect");
    const [effectType, setEffectType] = useState("Activated");
    const [effectTag, setEffectTag] = useState("Tuck");

    const [uploadedFile, setUploadedFile] = useState(null);

    const setStateFromObject = _object => {
        setName(_object.Name);
        setFood(typeof _object.Food === "string" ? _object.Food.split(" ") : _object.Food)
        const nestTypeCapitalized = _object.NestType[0].toUpperCase() + _object.NestType.slice(1)
        setNestType(nestTypeCapitalized)
        setVpNum(_object.VPNum)
        setEggNum(_object.EggNum)
        setWingspanNum(_object.Wingspan)
        setFoodSeparator(_object.FoodSeparator)
        setHabitat(typeof _object.Habitat === "string" ? _object.Habitat.split(" ") : _object.Habitat)
        setDescriptionText(_object.EffectText)
        setDescriptionType("Effect")
        setEffectType(_object.EffectType)
    }

    const loadRandomBird = () => {
        const birdNames = Object.keys(birdlist);
        const randomName = birdNames[Math.floor(Math.random() * birdNames.length)];
        const randomBird = birdlist[randomName];
        setStateFromObject(randomBird)
    }
    const exportBird = () => {
        const birdObj = {
            "Name":name,
            "ScientificName":"",
            "ExpansionSet":"core",
            "EffectType": effectType,
            "EffectText":descriptionText,
            "FlavorText":"",
            "Predator":false,
            "Flocking":false,
            "Bonus_Card":false,
            "VPNum":vpNum,
            "Habitat":habitat,
            "Food":food,
            "FoodSeparator":foodSeparator,
            "FoodSpecial":false,
            "NestType":nestType,
            "EggNum":eggNum,
            "Wingspan":wingspanNum
        }
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(birdObj)
          )}`;
          const link = document.createElement("a");
          link.href = jsonString;
          link.download = `${name}.json`;
      
          link.click();
    }

    const importBird = () =>
    {
        if (uploadedFile === null)
            return
        var reader = new FileReader();
        reader.onload = function() {
            const result = JSON.parse(this.result);
            debugger;
            setStateFromObject(result)   
        }
        reader.readAsText(uploadedFile)
    }
    const addFood = _food =>
    {
        if (food.length < 3)
            setFood([...food, _food])
    }
    const removeFood = () => 
    {
        if (food)
            setFood(food.slice(0, -1))
    }
    return (
        <div className="cardCreatorScreen">
            <div className="cardTemplateContainer">
                <CardTemplate food={food} foodSeparator={foodSeparator} habitat={habitat} name = {name} 
                    descriptionText={descriptionText} descriptionType = {descriptionType} effectType = {effectType} effectTag={effectTag}
                    nestType={nestType} vpNum={vpNum} eggNum={eggNum} wingspanNum = {wingspanNum} />
            </div>
            <div className="cardSettingsContainer">
                <div className="settingsOption">
                    <label htmlFor="birdName">Name: </label>
                    <input type="text" id ="birdName"  value={name} onChange={(_event) => {setName(_event.target.value)}}/>
                </div>
                <div className="settingsOption">
                    <label htmlFor="birdDescription">Description:</label>
                    <textarea style={{display: "block"}} type="text" id ="birdDescription" value={descriptionText} onChange={_event => {setDescriptionText(_event.target.value)}}/>
                    <label>Type: </label>
                    <select value={effectType} name="Effect Type" id="effectType" onChange={_event => {setEffectType(_event.target.value)}}>
                        {
                            Object.keys(EffectTypes).map(_type => {
                                return <option key={_type} value={_type}>{_type}</option>
                            })
                        }
                    </select>
                </div>
                <div className="settingsOption">
                    <label>Food (Click to add)</label>
                    <div className="foodSelector">
                        {Object.keys(FoodTypes).map((_type) => {
                            return <span key={_type} onClick={() => addFood(_type)}>
                                        <Food key={_type} Type={_type}/>
                                    </span>
                        })}
                    </div>
                    <label>Current food (Click to remove)</label>
                    <div className="foodSelector" onClick={removeFood}>
                        <FoodContainer foodArray = {food} separator = {foodSeparator}/>
                    </div>
                    <div className="food-separator">
                        <label htmlFor="food-separator">{foodSeparator === "/" ? 'Or ("/")' : 'And ("+")'}</label>
                        <input id="food-separator" type="checkbox" 
                            style={{width:"1.5rem", height:"1.5rem"}}
                            onClick = {() =>{foodSeparator === "/" ? setFoodSeparator("+") : setFoodSeparator("/")}}
                        />
                    </div>
                </div>
                <div className="settingsOption">
                    <label>Nest Type</label>
                    <div className="nestSelector">
                        {Object.keys(NestTypes).map((_type) => {
                            return <span key={_type} onClick={() => setNestType(_type)}>
                                       <Nest key={_type} Type={_type}/>
                                    </span>
                        })}
                    </div>
                </div>
                <div className="settingsOption">
                    <label htmlFor="egg-number">Number of Eggs: </label>
                    <input type="range" id="egg-number" min="0" max="6" name="Egg Number" value={eggNum} onChange={_event => setEggNum(_event.target.value)}/>
                </div>
                <div className="settingsOption">
                    <label htmlFor="wingspan-number">Wingspan: </label>
                    <input type="number" id="wingspan-number" name="Wingspan" value={wingspanNum} onChange={_event => setWingspanNum(_event.target.value)}/>
                </div>
                <div className="settingsOption">
                    <label htmlFor="vp-number">Victory Points: </label>
                    <input type="number" id="vp-number" name="Victory Points" value={vpNum} onChange={_event => setVpNum(_event.target.value)}/>
                </div>
            </div>
            <div className="cardSettingsContainer">
                <div className="settingsOption">
                    <label htmlFor="load-random-bird">Load random bird: </label>
                    <button id="load-random-bird" className="loadRandomBird" onClick = {loadRandomBird}>Random</button>
                </div>
                <div className="settingsOption">
                    <label htmlFor="export-button">Export as JSON file: </label>
                    <button id="export-button" className="exportButton" onClick = {exportBird}>Export</button>
                </div>
                <div className="settingsOption">
                    <div>
                        <label htmlFor="import-button">Load JSON: </label>
                        <input type="file" accept=".json" className="exportInput" onChange = {_event => setUploadedFile(_event.target.files[0])}/>
                    </div>
                    <button id="import-button" className="importButton" onClick = {importBird}>Import</button>
                </div>
            </div>
        </div>
    );
}

export default CardCreatorScreen;