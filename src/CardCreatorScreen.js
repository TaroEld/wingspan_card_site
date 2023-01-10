import React, { useState, useEffect, useRef } from "react";
import CardTemplate from './CardCreator/CardTemplate';
import FoodContainer from "./CardCreator/FoodContainer";
import "./CardCreatorScreen.css"
import { Food, FoodTypes } from "./Food";

function CardCreatorScreen(props) {
    const [food, setFood] = useState(["Wild"]);
    const [nestType, setNestType] = useState("Star");
    const [vpNum, setVpNum] = useState(6);
    const [eggNum, setEggNum] = useState(6);
    const [wingspanNum, setWingspanNum] = useState(100);
    const [foodSeparator, setFoodSeparator] = useState("/");
    const [habitat, setHabitat] = useState(["Forest", "Wet", "Grass"]);
    const [name, setName] = useState("");
    const [testState, setTestState] = useState(true)

    const [descriptionText, setDescriptionText] = useState("[Wild]");
    const [descriptionType, setDescriptionType] = useState("Effect");
    const [effectType, setEffectType] = useState("Activated");
    const [effectTag, setEffectTag] = useState("Tuck");
    const setDefaults = () => {
        setFood(["Wild", "Wild", "Wild"])
        setHabitat(["Forest", "Wet", "Grass"])
        setEggNum(6)
        setVpNum(6)
        setWingspanNum(100)
        setDescriptionText("")
    }
    const test = () => {
        setTestState(!testState);
        if(testState)
        {
            setFood(["Seed", "Seed", "Seed"])
            setHabitat(["Forest"])
            setEggNum(1)
            setVpNum(1)
            setWingspanNum(50)
            setDescriptionText("123 [Wild] 456  [Bowl] 789 [Egg] 123 [Tuck] 245 [Card]")
        }
        else
            setDefaults();
    }
    const currentFood = useRef();
    const addFood = (_food) =>
    {
        if (food.length < 3)
        {
            setFood([...food, _food])
        }
    }
    const removeFood = () => 
    {
        if (food)
        {
            setFood(food.slice(0, -1))
        }
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
                    <label htmlFor="birdName">Name:</label>
                    <input  id ="birdName"  value={name} onChange={(_event) => {setName(_event.target.value)}}/>
                </div>
                <div className="settingsOption">
                    <label htmlFor="birdDescription">Description:</label>
                    <textarea style={{display: "block"}} type="text" id ="birdDescription" value={descriptionText} onChange={(_event) => {setDescriptionText(_event.target.value)}}/>
                </div>
                <div className="settingsOption">
                    <label>Food (Click to add)</label>
                    <div className="foodSelector">
                        {Object.keys(FoodTypes).map((_type) => {
                            return <span onClick={() => addFood(_type)}>
                                        <Food Type={_type}/>
                                    </span>
                        })}
                    </div>
                    <label>Current food (Click to remove)</label>
                    <div className="foodSelector" onClick={removeFood}>
                        <FoodContainer foodArray = {food}/>
                    </div>
                    <label htmlFor="food-separator">{foodSeparator === "/" ? 'Or ("/")' : 'And ("+")'}</label>
                    <input id="food-separator" type="checkbox" className="test" onClick = {() =>{foodSeparator === "/" ? setFoodSeparator("+") : setFoodSeparator("/")}}/>
                </div>
                <div className="settingsOption">
                    
                </div>
                <div className="settingsOption">
                    
                </div>
                <div className="settingsOption">
                    
                </div>
                <button className="test" onClick = {test}/>
               
                
            </div>
        </div>
    );
}

export default CardCreatorScreen;