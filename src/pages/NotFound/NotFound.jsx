import {Link} from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
    return <>
        <h2 className={styles["not-found-message"]}>Sorry, we could not find this page.</h2>
        <p>Please click <Link to="/">here</Link> to return to the Home Page</p>
    </>

}

export default NotFound;