import React from 'react';
import {NestTypes, FoodTypes, Card, Egg, Tuck, Predator, BonusCard, Food, Nest} from "./Resources.js"
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
    "card" : Card,
    "egg" : Egg,
    "tuck" : Tuck,
    "predator" : Predator,
}

for (const [key] of Object.entries(FoodTypes)){
    EffectImageKeyWordMap[`${key.toLowerCase()}`] = Food
}
for (const [key] of Object.entries(NestTypes)){
    EffectImageKeyWordMap[`${key.toLowerCase()}`] = Nest
}

const GenericSpan = () => {
    return (
        <span/>
    )
}

function Effect(props) {
    // TODO: Add keys, I lack a good way to do that with the current way of getting the objects
    const prefixTextMap = {
        None :      "",
        Activated : "WHEN ACTIVATED: ",
        EnemyTurn: "ONCE BETWEEN TURNS: ",
        Played :    "WHEN PLAYED: ",
        Round :     "ROUND END: ",
        Game :      "GAME END: ",
    }

    const prefixTagMap = {
        "" : GenericSpan,
        None : GenericSpan,
        Flocking : Tuck,
        Predator: Predator,
        BonusCard: BonusCard,
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
            return null
        // This function goes over the text by splitting it into individual works based on spaces, then returns an array of either text spans, or image elements

        // Effect types are frequently referred to by color
        const type = translateColorType(props.type)
        const textFragments = _text.split(" ");
        const PrefixTagImg = prefixTagMap[props.tag]
        const ret = [
            <PrefixTagImg key="prefixImg"/>,
            <span key="prefixtag">{prefixTextMap[type]}</span>
        ];
        // This variable is used to combine all the previous text snippets before an element to replace to combine them all into one <span>
        let subText = "";
        for(let i = 0; i < textFragments.length; i++)
        {
            if (textFragments[i] in EffectImageKeyWordMap)
            {
                if (subText !== "")
                {
                    ret.push(<span key={i} className="text">{subText}</span>)
                    subText = "";
                }
                // Create element based on the type map
                // As some elements require a type, createElement with passed prop is used
                const ImageType = EffectImageKeyWordMap[textFragments[i]]
                const typeCapitalized = textFragments[i][0].toUpperCase() + textFragments[i].slice(1)
                const props = {
                    key : textFragments[i] + i
                }
                if (ImageType === Food || ImageType === Nest)
                    props.Type = typeCapitalized
                const Element = React.createElement(
                    ImageType,
                    props,
                )
                ret.push(Element)     
            }
            else{ subText += " " + textFragments[i] }
        }
        // This makes sure no text is left behind (no element to replace / text after the last element)
        if (subText !== "")
            ret.push(<span key="final" className="text">{subText}</span>)  
        
        return ret
    }
    return (
        <>
            <div className={"effect " + translateColorType(props.type)}>
                {composeDescription(props.text)}
            </div>
        </>
    );
}

export {Effect, EffectTypes, EffectTags};