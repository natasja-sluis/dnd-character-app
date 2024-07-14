import {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Dot, List, XSquare} from "@phosphor-icons/react"
import styles from "./Navigation.module.css"

function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);


    return <header>
        <nav className={styles["navigation-container"]}>
            <Link to="/">
                <h2 className={styles["navigation-title"]}>D&D</h2>
            </Link>
            <div className={styles["mobile-menu"]} onClick={() => setMenuOpen(!menuOpen)}>
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
            <ul className={menuOpen ? styles["open-menu"] : undefined}>
                <li className={styles["navigation-item"]}>
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/">Home
                    </NavLink>
                </li>
                <li className={styles["default-link"]}>
                    <Dot
                        size={32}
                    />
                </li>
                <li className={styles["navigation-item"]}>
                    <NavLink
                        className={({isActive}) => isActive ? "active-link" : "default-link"}
                        to="/overview">All Classes
                    </NavLink>
                </li>
                <li className={styles["default-link"]}>
                    <Dot
                        size={32}
                    />
                </li>
                <li className={styles["navigation-item"]}>
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