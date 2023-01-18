import './TierList.css'
import { birdlist } from '../birdlist_mini'
import getBirdObject from '../getBirdObject'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import CardTemplate from '../CardTemplate'
import EmptyCardTemplate from '../EmptyCardTemplate'
import { missingBirds } from '../missingBirds'
import { RowTemplate } from './RowTemplate'

const TierList = ({birdNameList, expansionFilter, displayType}) => {
    const [dataIdx, setDataIdx] = useState(Math.min(birdNameList.length, 10))
    let currentList = birdNameList.slice(0, dataIdx)
    let shownList = currentList.map((_name) => {
        const bird = getBird(_name)
        if (bird !== null)
        {
            const birdObj = getBirdObject(bird)
            if (expansionFilter !== "All" && birdObj.expansionSet !== expansionFilter)
                return null
            return birdObj

        }
        return _name;        
    })
    const loading = async () => {
        const newIdx = Math.min(birdNameList.length, dataIdx + 5)
        setDataIdx(newIdx)
        currentList = birdNameList.slice(0, newIdx)
    }
    function getBird(_birdName)
    {
        if (!(_birdName in birdlist))
            _birdName = missingBirds[_birdName]
        return (_birdName in birdlist) ? birdlist[_birdName] : null
    }
    let displayElement;
    if (displayType === "Table")
    {
        displayElement = (<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>VP</th>
                    <th>Food</th>
                    <th>Nest</th>
                    <th>Habitat</th>
                    <th>Egg</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {
                shownList.map(_element => {
                    if (_element === null || typeof _element === "string")
                        return null
                    else return (
                        <RowTemplate key={_element.name} className="small" {..._element} />
                    )     
                })
            }
            </tbody>
            </table>
        )
    }
    else 
    {
        displayElement = (
            shownList.map(_element => {
                if (_element === null)
                    return null
                else if (typeof _element === "string"){
                    return (
                        <EmptyCardTemplate key={_element} className="small">
                            <div>Missing Bird Data: {_element}</div>
                        </EmptyCardTemplate>
                    )
                }
                else return (
                    <CardTemplate key={_element.name} className="small" {..._element} />
                )     
            })
        )
    }
    return (
        <InfiniteScroll
            id = "tierList"
            className="tierList"
            loadMore={loading}
            hasMore={dataIdx < birdNameList.length}
        >
        {displayElement}
        </InfiniteScroll>
    )
}
export default TierList;