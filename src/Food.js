import Invertebrate from "./assets/gfx/food_worm.png";
import Wild from "./assets/gfx/food_wild.png";
import Rodent from "./assets/gfx/food_mouse.png";
import Nectar from "./assets/gfx/food_nectar.png";
import Seed from "./assets/gfx/food_seed.png";
import Fruit from "./assets/gfx/food_cherry.png";
import Fish from "./assets/gfx/food_fish.png";

const FoodTypes = {
    Invertebrate : "Invertebrate",
    Wild : "Wild",
    Rodent : "Rodent",
    Nectar : "Nectar",
    Seed : "Seed",
    Fruit : "Fruit",
    Fish : "Fish"
}

const foodImages = {
    Invertebrate : Invertebrate,
    Wild : Wild,
    Rodent : Rodent,
    Nectar : Nectar,
    Seed : Seed,
    Fruit : Fruit,
    Fish : Fish
}
const Food = (props) => {
    // const size = props.Size ? "size-" + props.Size : "size-normal"
    const style= {
        width: "1rem",
        height: "1rem"
    }
     return (
        <div style={style}>
            <img className="containImage" src={foodImages[props.Type]} alt={props.Type}/>
        </div>
    );
}

export {Food, FoodTypes}