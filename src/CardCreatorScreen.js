import React, { useState, useEffect } from "react";
import CardTemplate from './CardCreator/CardTemplate';
import "./CardCreatorScreen.css"

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
    return (
        <div className="cardCreatorScreen">
            <div className="cardTemplateContainer">
                <CardTemplate food={food} foodSeparator={foodSeparator} habitat={habitat} name = {name} 
                    descriptionText={descriptionText} descriptionType = {descriptionType} effectType = {effectType} effectTag={effectTag}
                    nestType={nestType} vpNum={vpNum} eggNum={eggNum} wingspanNum = {wingspanNum} />
            </div>
            <div className="cardSettingsContainer">
                <label htmlFor="birdName">Name:</label>
                <input  id ="birdName"  value={name} onChange={(_event) => {setName(_event.target.value)}}/>
                <label htmlFor="birdDescription">Description:</label>
                <textarea type="text" id ="birdDescription" value={descriptionText} onChange={(_event) => {setDescriptionText(_event.target.value)}}/>
                <button className="test" onClick = {test}/>
                <label htmlFor="food-separator-label">Separator</label>
                <input id="food-separator-label" type="checkbox" className="test" onClick = {() =>{foodSeparator === "/" ? setFoodSeparator("+") : setFoodSeparator("/")}}/>
            </div>
        </div>
    );
}

export default CardCreatorScreen;