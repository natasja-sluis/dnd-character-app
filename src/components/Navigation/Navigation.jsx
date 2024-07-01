import "./navigation.css"
import {NavLink} from "react-router-dom";

function Navigation() {
    return <nav>
        <div className="navigation-container">
            <h2 className="navigation-title">D&D</h2>
            <ul className="navigation-inner-container">
                <li className="navigation-item">
                    <NavLink
                        className= {({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/">Home
                    </NavLink>
                </li>
                <li className="default-link">
                    <img className="navigation-dot"
                         src="/src/assets/icons/dot.svg"
                         alt="dot"/>
                </li>
                <li className="navigation-item">
                    <NavLink
                        className= {({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/overview">All Classes
                    </NavLink>
                </li>
                <li className="default-link">
                    <img className="navigation-dot"
                         src="/src/assets/icons/dot.svg"
                         alt="dot"/>
                </li>
                <li className="navigation-item">
                    <NavLink
                        className= {({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/favourites">Favourites
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navigation;