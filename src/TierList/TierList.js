import './TierList.css'
import { birdlist } from '../birdlist_mini'
import getBirdObject from '../getBirdObject'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import CardTemplate from '../CardTemplate'
import EmptyCardTemplate from '../EmptyCardTemplate'
// const CardTemplate = lazy(() => import('../CardTemplate'))
// const EmptyCardTemplate = lazy(() => import('../EmptyCardTemplate'))

const TierList = ({birdNameList, expansionFilter}) => {
    const [dataIdx, setDataIdx] = useState(Math.min(birdNameList.length, 10))
    let currentList = birdNameList.slice(0, dataIdx)
    const loading = async () => {
        const newIdx = Math.min(birdNameList.length, dataIdx + 5)
        setDataIdx(newIdx)
        currentList = birdNameList.slice(0, newIdx)
    }
    return (
        <InfiniteScroll
            id = "tierList"
            className="tierList"
            loadMore={loading}
            hasMore={dataIdx < birdNameList.length}
        >
        {
            currentList.map((_name) => {
                const bird = birdlist[_name]
                if (bird !== undefined)
                {
                    const birdObj = getBirdObject(bird)
                    if (expansionFilter !== "All" && birdObj.expansionSet !== expansionFilter)
                        return null
                    return (
                        <CardTemplate key={birdObj.name} className="small" {...birdObj} />
                    )

                }
                else
                {
                    if (expansionFilter !== "All")
                        return null
                    return (
                        <EmptyCardTemplate key={_name} className="small">
                            <div>Missing Bird Data: {_name}</div>
                        </EmptyCardTemplate>
                    )
                } 
                
            })
        }
        </InfiniteScroll>
    )
}
export default TierList;