import {React, useState} from 'react';
import "./TierListScreen.css"
import {tierLists} from "../tierlists.js"
import TierList from './TierList.js';

function TierListScreen(props) {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [expansionFilter, setExpansionFilter] = useState("All")
    const [displayType, setDisplayType] = useState("Card")
    const tierListNames = [
        "God Tier",
        "Tier 0",
        "Tier 1",
        "Tier 2", 
        "Underused Tier",
    ]
    const getCurrentList = () => {
        return (<TierList key={currentIdx} birdNameList = {tierLists[currentIdx]} expansionFilter = {expansionFilter} displayType={displayType}/>)
    }
    return (
        <div id="tierListScreen">
            <div>
                <div style={{display: "flex", alignContent: "center", justifyContent: "center", fontSize:"1.5rem"}}>
                    <span>
                        WIP <br/>
                        This page shows the tier list of <a href="https://wingsplain.com/wingspan-bird-card-tier-list/">wingsplain.com</a> in a more detailed manner.<br/>
                        Scroll down to load more cards.
                    </span>
                </div>
                <div className="settingsOption">
                    <label htmlFor="expansionFilter">Filter by expansion: </label>
                    <select value={expansionFilter} onChange={_event => setExpansionFilter( _event.target.value)} name = "Expansion Filter" id="expansionFilter">
                        <option value="All">All</option>
                        <option value="core">Core</option>
                        <option value="european">EE</option>
                        <option value="oceania">Oceania</option>
                        <option value="asia">Asia</option>
                    </select>
                </div>
                <div className="settingsOption">
                    <label htmlFor="cardOrTable">Display type: </label>
                    <select value={displayType} onChange={_event => setDisplayType( _event.target.value)} name = "Card/Table" id="cardOrTable">
                        <option value="Card">Card</option>
                        <option value="Table">Table</option>
                    </select>
                </div>
            </div>
            <div className="headerButtonBar">
                {
                    tierLists.map((_entry, idx) => {
                        return <button key={idx} onClick={() => setCurrentIdx(idx)}>{tierListNames[idx]}</button>
                    })
                }
            </div>
            {getCurrentList()}
        </div>
    );
}

export default TierListScreen;