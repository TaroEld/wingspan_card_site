import React from 'react';
import Egg from '../Egg';
import "./EggContainer.css"

const EggContainer = (props) => {
    const getEggs = () => {
        const ret = []
        for (let index = 0; index < props.eggNum; index++) {
            ret.push(<Egg key={index}/>)
        }
        return ret;
    }
    return (
        <div className="eggContainer">
            {getEggs()}
        </div>
    );
};

export default EggContainer;