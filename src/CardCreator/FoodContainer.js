import React from 'react';
import "./FoodContainer.css"
import {Food} from '../Food.js'

function FoodContainer(_food) {
    const style= {
        width: "1rem",
        height: "1rem",
        display: "inline-block"
    }
    const getFood = () => {
        // Either + or / depending if the bird requires multiple foods or can choose between multiple
        const separator = _food.separator;
        let idx = 0;
        // Iterate over foods and add each as component followed by separator character
        const ret = _food.foodArray.map((_foodType) => {
            const innerRet = []
            innerRet.push(<Food key = {idx++} style={style} Type={_foodType} Size = "small"/>)
            innerRet.push(<span key = {idx++} style={{color: "black", fontWeight :"bold"}}>{separator}</span>)
            return innerRet;
        })
        // Remove last separator
        if (ret.length > 0)
            ret[ret.length - 1].pop()
        return ret
    }
    return (
        <div className="foodContainer">
            {getFood()}
        </div>
    );
}

export default FoodContainer;