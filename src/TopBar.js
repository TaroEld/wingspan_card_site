import { Link } from 'react-router-dom';
import './TopBar.css'
function TopBar(props) {
    return (
        <div className="topBar" >
            <Link className={props.activeRouteButton === "CardCreatorScreen" ? "active" : "" } to="creator">Creator</Link>
            <Link className={props.activeRouteButton === "TierListScreen" ? "active" : "" } to="tierlists">Tier List</Link>
            <Link className={props.activeRouteButton === "About" ? "active" : "" } to="about">About</Link>
        </div>
    );
}

export {TopBar};