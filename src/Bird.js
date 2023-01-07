import React from "react";
import './Bird.css'
import {Food} from './Food.js'
import {Nest} from './Nest.js'
const getFood = (_text) =>
{
    let ret = [];
    if(_text == "")
        return ret;
    let splitText = _text.split("/");
    let foodKey = {} //keep track of keys
    
    for (const food of splitText)
    {
        let splitFood = food.split(":");
        let foodType = splitFood[0].trim();
        
        let foodNum = parseInt(splitFood[1].trim());
        for (let x = 0; x < foodNum; x++)
        {
            if (foodKey[foodType] === undefined)
                foodKey[foodType] = 0;
            ret.push(<Food Type={foodType} key={foodType + ++foodKey[foodType]}/>)
        }
    }
    return ret;
}
export const Bird = (props) => {
    return (
        <tr className="Bird">
            <td className="BirdName">{props.stats.Name}</td>
            <td className="VP">{props.stats.VP}</td>
            <td className ="Food"> 
                {getFood(props.stats.Food)}
            </td>
            <td className="Nest">
                <Nest Type = {props.stats.NestType}/>
            </td>
            <td className="Eggs">{props.stats.EggSlots}</td>
            <td className={"Effect " + props.stats.EffectColor}>{props.stats.PowerText}</td>
        </tr>
    );
}
  