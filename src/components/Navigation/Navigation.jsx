import "./navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink></li>
            <li>
                <NavLink to="/overview">All Classes</NavLink>
            </li>
            <li>
                <NavLink to="/favourites">Favourites</NavLink>
            </li>
        </ul>
        </nav>
}

export default Navigation;