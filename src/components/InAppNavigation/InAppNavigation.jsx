import {Link} from "react-router-dom";
import styles from "./InAppNavigation.module.css"

function InAppNavigation({navigate, onClick, children, ...restProps}) {
    return <div className={styles["in-app-navigation"]}>
        <Link
            to={navigate}
            onClick={onClick}
            {...restProps}
        >
            { children }
        </Link>
    </div>
}

export default InAppNavigation;