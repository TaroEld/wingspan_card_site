import React from 'react';

import forest from "./assets/gfx/land_forest.png";
import grass from "./assets/gfx/land_grass.png";
import wet from "./assets/gfx/land_wet.png";

const habitatImages = {
    Forest : forest,
    Grass : grass,
    Wet : wet,
}
function Habitat(props) {
    const style={
        width: "2rem",
        height: "2rem"
    }
    return (
        <div className="habitatImg" style={style}>
            <img className="containImage" src={habitatImages[props.Type]} alt={props.Type}/>
        </div>
    );
}

export default Habitat;