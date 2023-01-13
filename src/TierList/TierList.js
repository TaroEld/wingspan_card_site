import './TierList.css'
import { birdlist } from '../birdlist_mini'
import {CardTemplate, EmptyTemplate} from '../CardTemplate'
import getBirdObject from '../getBirdObject'

const TierList = ({birdNameList, name}) => {
    return (
        <div className="tierList">
            <div className="tierHeader">{name}</div>
            {
                birdNameList.map((_name) => {
                    const bird = birdlist[_name]
                    if (bird !== undefined)
                    {
                        const birdObj = getBirdObject(bird)
                        return (
                            <CardTemplate key={birdObj.name} className="small" {...birdObj} />
                        )

                    }
                    else return (
                            <EmptyTemplate className="small">
                                <div>`Missing Bird Data: {_name}`</div>
                            </EmptyTemplate>
                        )
                    
                })
            }
        </div>
    )

}
export default TierList;