import {React, useState} from 'react';
import "./TierListScreen.css"
import {tierLists} from "../tierlists.js"
import TierList from './TierList.js';

function TierListScreen() {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [expansionFilter, setExpansionFilter] = useState("All")
    const getCurrentList = () => {
        return (<TierList key={currentIdx} birdNameList = {tierLists[currentIdx]} expansionFilter = {expansionFilter}/>)
    }
    return (
        <div id="tierListScreen">
            <div>
                This page shows the tier list of <a href="https://wingsplain.com/wingspan-bird-card-tier-list/">wingsplain.com</a> in a more comprehensible view.
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
            </div>
            <div className="headerButtonBar">
                {
                    tierLists.map((_entry, idx) => {
                        return <button key={idx} onClick={() => setCurrentIdx(idx)}>List: {idx}</button>
                    })
                }
            </div>
            {getCurrentList()}
        </div>
    );
}

export default TierListScreen;