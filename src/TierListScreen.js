import React from 'react';
import {TierList} from './TierList.js'
import {birdlist} from "./birdlist.js"

function TierListScreen(props) {
    return (
        <>
        <TierList tierlist = {birdlist.god} name = "God Tier"/>
        <TierList tierlist = {birdlist.tier0} name = "Tier 1"/>
        <TierList tierlist = {birdlist.tier1} name = "Tier 2"/>
        <TierList tierlist = {birdlist.tier2} name = "Tier 3"/>
        <TierList tierlist = {birdlist.tier3} name = "Tier 4"/>
        </>
    );
}

export default TierListScreen;