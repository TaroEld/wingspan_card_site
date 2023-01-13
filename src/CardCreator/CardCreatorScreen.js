import React, { useState} from "react";
import "./CardCreatorScreen.css"
import {CardTemplate} from '../CardTemplate';
import {birdlist} from "../birdlist_mini.js"
import {FoodContainer} from "../Resources/ResourceContainers.js"
import { EffectTypes } from "../Resources/Effect";
import {NestTypes, FoodTypes, HabitatTypes, Nest, Food} from "../Resources/Resources.js"
import getBirdObject from "../getBirdObject";

function CardCreatorScreen(props) {
    const [name, setName] = useState("Name");
    const [food, setFood] = useState([FoodTypes.Invertebrate, FoodTypes.Fish, FoodTypes.Fruit]);
    const [nestType, setNestType] = useState(NestTypes.Star);
    const [vpNum, setVpNum] = useState(10);
    const [eggNum, setEggNum] = useState(6);
    const [wingspanNum, setWingspanNum] = useState(100);
    const [foodSeparator, setFoodSeparator] = useState("/");
    const [habitat, setHabitat] = useState([HabitatTypes.Grassland, HabitatTypes.Wetland, HabitatTypes.Forest]);

    const [effectText, setEffectText] = useState("fruit");
    const [effectType, setEffectType] = useState(EffectTypes.Activated);
    const [effectTag, setEffectTag] = useState("");
    const [flavorText, setFlavorText] = useState("Flavor");

    const [uploadedFile, setUploadedFile] = useState(null);

    const setStateFromObject = _object => {
        setName(_object.name);
        setFood(_object.food)
        setFoodSeparator(_object.foodSeparator)
        setHabitat(_object.habitat)
        setNestType(_object.nestType)
        setVpNum(_object.vpNum)
        setEggNum(_object.eggNum)
        setWingspanNum(_object.wingspanNum)
        setEffectText(_object.effectText)
        setFlavorText(_object.flavorText)
        setEffectType(_object.effectType)
    }

    const loadRandomBird = () => {
        const birdNames = Object.keys(birdlist);
        const randomName = birdNames[Math.floor(Math.random() * birdNames.length)];
        const randomBird = birdlist[randomName];
        const statsObj = getBirdObject(randomBird)
        setStateFromObject(statsObj)
    }
    const exportBird = () => {
        const birdObj = getBirdObject({
            name,
            effectType,
            effectText,
            vpNum,
            habitat,
            food,
            foodSeparator,
            nestType,
            eggNum,
            wingspanNum
        })
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
            setStateFromObject(getBirdObject(result))   
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
                    effectText={effectText} effectType = {effectType} effectTag={effectTag}
                    nestType={nestType} vpNum={vpNum} eggNum={eggNum} wingspanNum = {wingspanNum} flavorText={flavorText} />
            </div>
            <div className="cardSettingsContainer">
                <div className="settingsOption">
                    <label htmlFor="birdName">Name: </label>
                    <input type="text" id ="birdName"  value={name} onChange={(_event) => {setName(_event.target.value)}}/>
                </div>
                <div className="settingsOption">
                    <label htmlFor="birdDescription">Description:</label>
                    <textarea style={{display: "block"}} type="text" id ="birdDescription" value={effectText} onChange={_event => {setEffectText(_event.target.value)}}/>
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