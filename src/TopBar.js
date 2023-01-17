import { Link, useLocation } from 'react-router-dom';
import './TopBar.css'
function TopBar(props) {
    let location = useLocation()
    return (
        <div className="topBar" >
            <Link className={location.pathname === "/creator" ? "active" : "" } to="creator">Creator</Link>
            <Link className={location.pathname === "/tierlists" ? "active" : "" } to="tierlists">Tier List</Link>
            <Link className={location.pathname === "/about" ? "active" : "" } to="about">About</Link>
        </div>
    );
}

export default TopBar;