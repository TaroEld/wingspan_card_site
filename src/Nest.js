import './Nest.css'

import bowl from "./assets/gfx/nest_bowl.png";
import cavity from "./assets/gfx/nest_cavity.png";
import ground from "./assets/gfx/nest_ground.png";
import platform from "./assets/gfx/nest_platform.png";
import wild from "./assets/gfx/nest_wild.png";

const nestImages = {
    bowl : bowl,
    cavity : cavity,
    ground : ground,
    platform : platform,
    wild : wild,
}
export const Nest = (props) => {
    return (
        <>
            <span className = "nestImg">
                <img src={nestImages[props.Type]} alt={props.Type}/>
            </span>
        </>
    );
}
  