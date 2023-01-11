import { useState } from 'react'
import './TierList.css'
import { birdlist } from './birdlist_mini'
import CardTemplate from './CardCreator/CardTemplate'


export const TierList = ({birdNameList, name}) => {
    const [displayMode, setDisplayMode] = useState("Card")
    return (
        <div className="tierList">
            <div className="tierHeader">{name}</div>
            {
                birdNameList.map((_name) => {
                    const birdObj = birdlist[_name]
                    if (birdObj !== undefined)
                    {
                        return <CardTemplate name = {birdObj.Name}  food={birdObj.Food.split(" ")} foodSeparator={birdObj.FoodSeparator} habitat={birdObj.Habitat.split(" ")} 
                            descriptionText={birdObj.EffectText || ""} descriptionType = "Effect" effectType = {birdObj.EffectType} effectTag="None"
                            nestType={birdObj.NestType} vpNum={birdObj.VpNum} eggNum={birdObj.EggNum} wingspanNum = {birdObj.wingspanNum} />
                    }
                    else return <div>Missing bird {_name}</div>
                })
            }
        </div>
    )

}
  