import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import {WaveSine} from "@phosphor-icons/react"
import styles from "./Homepage.module.css"

function Homepage() {

    const navigate = useNavigate();

    return <div className={styles["homepage-container"]}>
        <div className={styles["text-container"]}>
            <Link to="/quiz"><h1>Take the quiz</h1></Link>
        </div>
        <WaveSine
        size={23}
    />
        <div>
            <Button
                text="Log In"
                linkTo="/login"
            />
            <Button
                text="Register"
                linkTo="/register"
            />
        </div>
    </div>
}

export default Homepage;