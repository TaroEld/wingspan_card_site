import React from "react";
import { DescriptionContainer, EggContainer, HabitatContainer, NestContainer, FoodContainer } from "../Resources/ResourceContainers";
export const RowTemplate = ({name, food, foodSeparator, habitat, vpNum, eggNum, nestType, effectText, effectType, effectTag}) => {
    return (
        <tr className="Bird">
            <td>{name}</td>
            <td>{vpNum}</td>
            <td><FoodContainer separator = {foodSeparator} foodArray = {food}/></td>
            <td><NestContainer Type={nestType}/></td>
            <td><HabitatContainer habitatArray = {habitat}/></td>
            <td><EggContainer eggNum = {eggNum}/></td>
            <td><DescriptionContainer effectText = {effectText} effectType={effectType} effectTag={effectTag}/></td>
        </tr>
    );
}
  