import React from 'react';
import {TierList} from './TierList.js'
import {tierLists} from "./tierlists.js"

function TierListScreen(props) {
    return (
        <>
        <div style={{width:"100%", height:"10rem", fontSize: "100px", display:"flex", justifyContent:"center"}}> UNFINISHED </div>
        <TierList birdNameList = {tierLists[0]} name = "God Tier"/>
        <TierList birdNameList = {tierLists[1]} name = "Tier 1"/>
        <TierList birdNameList = {tierLists[2]} name = "Tier 2"/>
        <TierList birdNameList = {tierLists[3]} name = "Tier 3"/>
        <TierList birdNameList = {tierLists[4]} name = "Tier 4"/>
        </>
    );
}

export default TierListScreen;