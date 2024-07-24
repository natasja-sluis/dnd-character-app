import {useContext, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Dot, List, SignOut, SignIn, XSquare} from "@phosphor-icons/react"
import styles from "./Navigation.module.css"
import {AuthContext} from "../../context/AuthContext.jsx";

function Navigation() {

    const [menuOpen, toggleMenuOpen] = useState(false);
    const {logout, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();


    return <header>
        <nav className={styles["navigation-container"]}>
            <Link to="/">
                <h2 className={styles["navigation-title"]}>D&D</h2>
            </Link>
            <div className={styles["mobile-menu"]} onClick={() => toggleMenuOpen(!menuOpen)}>
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
                        className={({isActive}) => isActive ? styles["active-link"] : styles["default-link"]}
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
                        className={({isActive}) => isActive ? styles["active-link"] : styles["default-link"]}
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
                        className={({isActive}) => isActive ? styles["active-link"] : styles["default-link"]}
                        to="/profile">Profile
                    </NavLink>
                </li>
                <li className={styles["default-link"]}>
                    <Dot
                        size={32}
                    />
                </li>
                <li>
                    {isAuthenticated ? <SignOut size={32} onClick={logout} className={styles["login-out-icon"]}/>
                        : <SignIn size={32} onClick={() => navigate("/login")} className={styles["login-out-icon"]}/>
                    }
                </li>
            </ul>
        </nav>
    </header>
}

export default Navigation;