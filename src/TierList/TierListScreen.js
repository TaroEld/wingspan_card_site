import {React, useState} from 'react';
import "./TierListScreen.css"
import {tierLists} from "../tierlists.js"
import TierList from './TierList.js';

function TierListScreen() {
    const [currentIdx, setCurrentIdx] = useState(0)
    const getCurrentList = () => {
        return (<TierList key={currentIdx} birdNameList = {tierLists[currentIdx]}/>)
    }
    return (
        <div id="tierListScreen">
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