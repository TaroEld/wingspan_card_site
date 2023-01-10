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
    const style = {
        width: "2rem",
        height: "2rem"
    }
    return (
        <div style={style}>
            <img className="containImage" src={NestImages[props.Type]} alt={props.Type}/>
        </div>
    );
}
export {Nest, NestTypes}