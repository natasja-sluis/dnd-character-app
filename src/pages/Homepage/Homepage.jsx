import {Link, useNavigate} from "react-router-dom";
import {WaveSine} from "@phosphor-icons/react"
import styles from "./Homepage.module.css"

function Homepage() {

    const navigate = useNavigate();

    return <div className={styles["homepage-container"]}>
        <div className={styles["text-container"]}>
            <Link to="/quiz">
                <h1> Take the quiz </h1>
            </Link>
        </div>
        <WaveSine
            size={23}
        />
        <div>
            <button
                type="button"
                onClick={() => navigate("/login")}
            >
                Log In
            </button>
            <button
                type="button"
                onClick={() => navigate("/register")}
            >
                Register
            </button>
        </div>
    </div>

}

export default Homepage;