import React from 'react';
import "./HabitatContainer.css"
import {Habitat} from "../Habitat.js"

function HabitatContainer(props) {
    const getHabitat = () => {
        let idx = 0;
        return props.habitatArray.map((_type) => {
            return <Habitat key = {idx++} Type={_type}/>
        })
    }
    return (
        <div className="habitatContainer">
            {getHabitat()}
        </div>
    );
}

export default HabitatContainer;