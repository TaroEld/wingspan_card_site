import React from 'react';
import "./Habitat.css"

import forest from "./assets/gfx/land_forest.png";
import grass from "./assets/gfx/land_grass.png";
import wet from "./assets/gfx/land_wet.png";

const habitatImages = {
    Forest : forest,
    Grass : grass,
    Wet : wet,
}
function Habitat(props) {
    return (
        <span className = "habitatImg">
            <img src={habitatImages[props.Type]} alt={props.Type}/>
        </span>
    );
}

export default Habitat;