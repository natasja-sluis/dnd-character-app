import {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Dot, List, XSquare} from "@phosphor-icons/react"
import "./navigation.css"

function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);


    return <header>
        <nav className="navigation-container">
            <Link to="/">
                <h2 className="navigation-title">D&D</h2>
            </Link>
            <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ?
                    <XSquare
                        size={32}
                        color="hsl(34, 75%, 44%)"
                    /> :
                    <List
                        size={32}
                        color="hsl(34, 75%, 44%)"
                    />
                }
            </div>
            <ul className={menuOpen ? "open-menu" : undefined}>
                <li className="navigation-item">
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/">Home
                    </NavLink>
                </li>
                <li className="default-link">
                    <Dot
                        size={32}
                    />
                </li>
                <li className="navigation-item">
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/overview">All Classes
                    </NavLink>
                </li>
                <li className="default-link">
                    <Dot
                        size={32}
                    />
                </li>
                <li className="navigation-item">
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/favourites">Favourites
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigation;