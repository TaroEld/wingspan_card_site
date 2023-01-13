import {React, lazy, Suspense, useState} from 'react';
import {tierLists} from "../tierlists.js"
import "./TierListScreen.css"

const TierList = lazy(() => import('./TierList.js'))

function TierListScreen(props) {
    const tierListNames = [
        "God Tier",
        "Tier 0",
        "Tier 1",
        "Tier 2",
        "Tier 3",
        "Tier 4"
    ]
    const [currentIdx, setCurrentIdx ] = useState(0)
    const [currentName, setCurrentName] = useState(tierListNames[currentIdx])
    const updateSelectedList = (_button, _idx) => {
        setCurrentIdx(_idx);
        setCurrentName(tierListNames[_idx])
    }
    return (
        <div id="tierListScreen">
            <div className="headerButtonBar">
                {
                    tierLists.map((_entry, idx) => {
                        return <button key={idx} onClick={() => updateSelectedList(this, idx)}>{tierListNames[idx]}</button>
                    })
                }
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <TierList birdNameList = {tierLists[currentIdx]} name = {currentName}/>
            </Suspense>
        </div>
    );
}

export default TierListScreen;