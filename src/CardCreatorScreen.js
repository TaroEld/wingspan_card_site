import React, { useState } from "react";
import CardTemplate from './CardCreator/CardTemplate';
import "./CardCreatorScreen.css"

function CardCreatorScreen(props) {
    const [food, setFood] = useState(["Wild", "Wild", "Wild"]);
    const [nest, setNest] = useState(["Star"]);
    const [vpNum, setVpNum] = useState(6);
    const [eggNum, setEggNum] = useState(6);
    const [foodSeparator, setFoodSeparator] = useState("/");
    const [habitat, setHabitat] = useState(["Forest", "Wet", "Grass"]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("[Wild]");
    const [testState, setTestState] = useState(true)
    const test = () => {
        setTestState(!testState);
        if(testState)
        {
            setFood(["Seed", "Seed", "Seed"])
            setHabitat(["Forest"])
            setEggNum(1)
            setVpNum(1)
            setDescription("123 [Wild] 456  [Bowl] 789 [Egg] 123 [Tuck] 245 [Card]")
        }
        else
        {
            setFood(["Wild", "Wild", "Wild"])
            setHabitat(["Forest", "Wet", "Grass"])
            setEggNum(6)
            setVpNum(6)
        }
    }
    return (
        <div className="cardCreatorScreen">
            <div className="cardTemplateContainer">
                <CardTemplate food={food} foodSeparator={foodSeparator} habitat={habitat} name = {name} description={description} nest={nest} vpNum={vpNum} eggNum={eggNum} />
            </div>
            <div className="cardSettingsContainer">
                <label htmlFor="birdName">Name:</label>
                <input  id ="birdName"  value={name} onChange={(_event) => {setName(_event.target.value)}}/>
                <label htmlFor="birdDescription">Description:</label>
                <textarea type="text" id ="birdDescription" value={description} onChange={(_event) => {setDescription(_event.target.value)}}/>
                <button className="test" onClick = {test}/>
                <label htmlFor="food-separator-label">Separator</label>
                <input id="food-separator-label" type="checkbox" className="test" onClick = {() =>{foodSeparator === "/" ? setFoodSeparator("+") : setFoodSeparator("/")}}/>
            </div>
        </div>
    );
}

export default CardCreatorScreen;