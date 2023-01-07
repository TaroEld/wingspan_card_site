import './Food.css'
import Invertebrate from "./assets/gfx/food_worm.png";
import Wild from "./assets/gfx/food_wild.png";
import Rodent from "./assets/gfx/food_mouse.png";
import Nectar from "./assets/gfx/food_nectar.png";
import Seed from "./assets/gfx/food_seed.png";
import Fruit from "./assets/gfx/food_cherry.png";
import Fish from "./assets/gfx/food_fish.png";

const foodImages = {
    Invertebrate : Invertebrate,
    Wild : Wild,
    Rodent : Rodent,
    Nectar : Nectar,
    Seed : Seed,
    Fruit : Fruit,
    Fish : Fish
}
export const Food = (props) => {
    return (
        <>
            <span className = "foodImg">
                <img src={foodImages[props.Type]} alt={props.Type}/>
            </span>
        </>
    );
}
  