import React from 'react';
import {Nest, NestTypes} from "../Nest.js"
import {Food, FoodTypes} from "../Food.js"
import Card from "../Card.js"
import Egg from "../Egg.js"
import Tuck from "../assets/gfx/tuck.png"
import "./Description.css"
const Description = (props) => {
    const keyWordMap = {
        "[Card]" : <Card/>,
        "[Egg]" : <Egg/>,
        "[Tuck]" : <img src={Tuck} alt={Tuck}/>,
    }
    for (const [key] of Object.entries(FoodTypes)){
        keyWordMap[`[${key}]`] = <Food Type={key}/>
    }
    for (const [key] of Object.entries(NestTypes)){
        keyWordMap[`[${key}]`] = <Nest Type={key}/>
    }
    const composeDescription = (_text) => {
        // This function goes over the text by splitting it into individual works based on spaces, then returns an array of either text spans, or image elements
        const textFragments = _text.split(" ");
        const ret = [];
        // This variable is used to combine all the previous text snippets before an element to replace to combine them all into one <span>
        let subText = "";
        for(let i = 0; i < textFragments.length; i++)
        {
            if (textFragments[i] in keyWordMap)
            {
                if (subText !== "")
                {
                    ret.push(<span className="text">{subText}</span>)
                    subText = "";
                }
                ret.push(keyWordMap[textFragments[i]])     
            }
            else{ subText += " " + textFragments[i] }
        }
        // This makes sure no text is left behind (no element to replace / text after the last element)
        if (subText !== "")
            ret.push(<span className="text">{subText}</span>)  
        return ret
    }
    return (
        <div className="description">
            {composeDescription(props.text)}
        </div>
    );
};

export default Description;