import './TierList.css'
import {Bird} from './Bird.js'
const getBirds = (_tierlist) => {
    return Object.entries(_tierlist).map((_key, _value) => {
        return <Bird key={_key} {..._value}/>
    })
}
export const TierList = (props) => {
    return (
        <div className = "Tier">
            <div className="TierHeader">{props.name}</div>
            <table className="TierList">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>VP</th>
                        <th>Food</th>
                        <th>Nest</th>
                        <th>Eggs</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(props.tierlist).map((_key, _value) => {
                        return <Bird key={_key} stats={props.tierlist[_key]}/>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}
  