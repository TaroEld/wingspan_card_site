import React from 'react';
import {Nest, NestTypes} from "./Nest.js"
import {Food, FoodTypes} from "./Food.js"
import Card from "./Card.js"
import Egg from "./Egg.js"
import Tuck from "./assets/gfx/tuck.png"
import Predator from "./assets/gfx/predator.png"
import "./Effect.css"

const EffectTypes = {
    None :      "None",
    Activated : "Activated",
    EnemyTurn:  "EnemyTurn",
    Played :    "Played",
    Round :     "Round",
    Game :      "Game"
}

const colorTypeMap = {
    null: EffectTypes.None,
    none: EffectTypes.None,
    brown: EffectTypes.Activated,
    white: EffectTypes.Played,
    pink: EffectTypes.EnemyTurn,
    teal: EffectTypes.Round,
    yellow: EffectTypes.Game, 
}

const EffectTags = {
    None :      "None",
    Predator :  "Predator",
    Flocking :  "Flocking",
    Bonus_Card: "Bonus_Card"
} 

const EffectImageKeyWordMap = {
    "card" : <Card/>,
    "egg" : <Egg/>,
    "tuck" : <img className="containImage" src={Tuck} alt={Tuck}/>,
    "predator" : <img className="containImage" src={Predator} alt={Predator}/>,
}
for (const [key] of Object.entries(FoodTypes)){
    EffectImageKeyWordMap[`${key.toLowerCase()}`] = <Food Type={key}/>
}
for (const [key] of Object.entries(NestTypes)){
    EffectImageKeyWordMap[`${key.toLowerCase()}`] = <Nest Type={key}/>
}

function Effect(props) {
    // TODO: Add keys, I lack a good way to do that with the current way of getting the objects
    const prefixTypeMap = {
        None :      "",
        Activated : "WHEN ACTIVATED: ",
        EnemyTurn: "ONCE BETWEEN TURNS: ",
        Played :    "WHEN PLAYED: ",
        Round :     "ROUND END: ",
        Game :      "GAME END: ",
    }

    const prefixTagMap = {
        None : <span/>,
        Flocking : <img className="containImage" src={Tuck} alt={Tuck}/>,
        Predator: <img className="containImage" src={Predator} alt={Predator}/>,
        Bonus_Card: <img className="containImage" src={Tuck} alt={Tuck}/>,
    }
    const translateColorType = _type =>
    {
        if (_type in EffectTypes)
            return _type
        if (_type in colorTypeMap)
            return colorTypeMap[_type]
        console.error("Could not find effect type " + _type)
        return _type
    }
    const composeDescription = (_text) => {
        if (_text === null)
            return <></>
        // This function goes over the text by splitting it into individual works based on spaces, then returns an array of either text spans, or image elements

        // Effect types are frequently referred to by color
        const type = translateColorType(props.type)
        const textFragments = _text.split(" ");
        const ret = [
            prefixTagMap[props.tag],
            <span>{prefixTypeMap[type]}</span>
        ];
        // This variable is used to combine all the previous text snippets before an element to replace to combine them all into one <span>
        let subText = "";
        for(let i = 0; i < textFragments.length; i++)
        {
            if (textFragments[i] in EffectImageKeyWordMap)
            {
                if (subText !== "")
                {
                    ret.push(<span className="text">{subText}</span>)
                    subText = "";
                }
                ret.push(EffectImageKeyWordMap[textFragments[i]])     
            }
            else{ subText += " " + textFragments[i] }
        }
        // This makes sure no text is left behind (no element to replace / text after the last element)
        if (subText !== "")
            ret.push(<span className="text">{subText}</span>)  
        
        return ret
    }
    return (
        <div className={"effect " + translateColorType(props.type)}>
            {composeDescription(props.text)}
        </div>
    );
}

export {Effect, EffectTypes, EffectTags};