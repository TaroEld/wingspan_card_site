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
    Played :    "Played",
    Round :     "Round",
    Game :      "Game",
    Turn :      "Turn"
}

const EffectTags = {
    None :      "None",
    Predator :  "Predator",
    Tuck :      "Tuck",
} 

const EffectImageKeyWordMap = {
    "[Card]" : <Card/>,
    "[Egg]" : <Egg/>,
    "[Tuck]" : <img className="containImage" src={Tuck} alt={Tuck}/>,
    "[Predator]" : <img className="containImage" src={Predator} alt={Predator}/>,
}
for (const [key] of Object.entries(FoodTypes)){
    EffectImageKeyWordMap[`[${key}]`] = <Food Type={key}/>
}
for (const [key] of Object.entries(NestTypes)){
    EffectImageKeyWordMap[`[${key}]`] = <Nest Type={key}/>
}

function Effect(props) {
    const prefixTypeMap = {
        None :      "",
        Activated : "When Activated: ",
        Played :    "When Played: ",
        Round :     "On Round End: ",
        Game :      "On Game End: ",
        Turn :      "On Turn End: "
    }
    const prefixTagMap = {
        None : <span/>,
        Tuck : <img className="containImage" src={Tuck} alt={Tuck}/>
    }
    const composeDescription = (_text) => {
        // This function goes over the text by splitting it into individual works based on spaces, then returns an array of either text spans, or image elements
        const textFragments = _text.split(" ");
        const ret = [
            prefixTagMap[props.tag],
            <span>{prefixTypeMap[props.type]}</span>
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
        <div className={"effect " + props.type}>
            {composeDescription(props.text)}
        </div>
    );
}

export {Effect, EffectTypes, EffectTags};