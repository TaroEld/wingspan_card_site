import "./Resources.css"
import BowlImg from "../assets/gfx/nest_bowl.png";
import CavityImg from "../assets/gfx/nest_cavity.png";
import GroundImg from "../assets/gfx/nest_ground.png";
import PlatformImg from "../assets/gfx/nest_platform.png";
import StarImg from "../assets/gfx/nest_wild.png";
import InvertebrateImg from "../assets/gfx/food_worm.png";
import WildImg from "../assets/gfx/food_wild.png";
import RodentImg from "../assets/gfx/food_mouse.png";
import NectarImg from "../assets/gfx/food_nectar.png";
import SeedImg from "../assets/gfx/food_seed.png";
import FruitImg from "../assets/gfx/food_cherry.png";
import FishImg from "../assets/gfx/food_fish.png";
import ForestImg from "../assets/gfx/land_forest.png";
import GrassImg from "../assets/gfx/land_grass.png";
import WetImg from "../assets/gfx/land_wet.png";
import CardImg from "../assets/gfx/card.png";
import EggImg from "../assets/gfx/egg.png";
import DieImg from "../assets/gfx/die.png";
import TuckImg from "../assets/gfx/tuck.png"
import PredatorImg from "../assets/gfx/predator.png";
import WingspanImg from "../assets/gfx/wingspan.png";
import VPImg from "../assets/gfx/point.png";


const NestTypes = {
    Bowl : "Bowl",
    Cavity : "Cavity",
    Ground : "Ground",
    Platform : "Platform",
    Star : "Star",
}
const NestImages = {
    Bowl : BowlImg,
    Cavity : CavityImg,
    Ground : GroundImg,
    Platform : PlatformImg,
    Star : StarImg,
}
const FoodTypes = {
    Invertebrate : "Invertebrate",
    Wild : "Wild",
    Rodent : "Rodent",
    Nectar : "Nectar",
    Seed : "Seed",
    Fruit : "Fruit",
    Fish : "Fish"
}
const FoodImages = {
    Invertebrate : InvertebrateImg,
    Wild : WildImg,
    Rodent : RodentImg,
    Nectar : NectarImg,
    Seed : SeedImg,
    Fruit : FruitImg,
    Fish : FishImg
}
const HabitatTypes = {
    Forest : "Forest",
    Grassland : "Grassland",
    Wetland : "Wetland",
}
const HabitatImages = {
    Forest : ForestImg,
    Grassland : GrassImg,
    Wetland : WetImg,
}
const Nest = ({Type}) => {
    return (
        <div className="nestImg">
            <img className="containImage" src={NestImages[Type]} alt={Type}/>
        </div>
    );
}
const Food = ({Type}) => {
     return (
        <div className={"foodImg"}>
            <img className="containImage" src={FoodImages[Type]} alt={Type}/>
        </div>
    );
}
const Card = () => {
    return (
        <div className="cardImg">
            <img className="containImage" src={CardImg} alt="card"/>
        </div>
    );
};
const Egg = () => {
    return (
        <div className="eggImg">
            <img className="containImage" src={EggImg} alt="egg"/>
        </div>
    );
};
const Die = () => {
    return (
        <div className="dieImg">
            <img className="containImage" src={DieImg} alt="die"/>
        </div>
    );
};
const Habitat = ({Type}) => {
    return (
        <div className="habitatImg">
            <img className="containImage" src={HabitatImages[Type]} alt={Type}/>
        </div>
    );
}
const Tuck = () => {
    return (
        <div className="tuckImg">
            <img className="containImage" src={TuckImg} alt="tuck"/>
        </div>
    );
}
const Predator = () => {
    return (
        <div className="predatorImg">
            <img className="containImage" src={PredatorImg} alt="predator"/>
        </div>
    );
}
const BonusCard = () => {   
    return (
        <div className="bonusCardImg">
            <img className="containImage" src={PredatorImg} alt="bonus card"/>
        </div>
    );
}
const Wingspan = () => {
    return (
        <div className="wingspanImg">
            <img className="containImage" src={WingspanImg} alt="wingspan"/>
        </div>
    );
};
const VP = () => {
    return (
        <div className="vpImg">
            <img className="containImage" src={VPImg} alt="victory points"/>
        </div>
    );
};


export {FoodTypes, NestTypes, HabitatTypes, Card, Egg, Habitat, Nest, Food, Die, Tuck, Predator, BonusCard, Wingspan, VP}