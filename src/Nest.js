import './Nest.css'

import Bowl from "./assets/gfx/nest_bowl.png";
import Cavity from "./assets/gfx/nest_cavity.png";
import Ground from "./assets/gfx/nest_ground.png";
import Platform from "./assets/gfx/nest_platform.png";
import Star from "./assets/gfx/nest_wild.png";

const NestTypes = {
    Bowl : "Bowl",
    Cavity : "Cavity",
    Ground : "Ground",
    Platform : "Platform",
    Star : "Star",
}

const NestImages = {
    Bowl : Bowl,
    Cavity : Cavity,
    Ground : Ground,
    Platform : Platform,
    Star : Star,
}
const Nest = (props) => {
    return (
        <>
            <span className = "nestImg">
                <img src={NestImages[props.Type]} alt={props.Type}/>
            </span>
        </>
    );
}
export {Nest, NestTypes}