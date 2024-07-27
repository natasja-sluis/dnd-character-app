import {Link, useNavigate} from "react-router-dom";
import {WaveSine} from "@phosphor-icons/react"
import styles from "./Homepage.module.css"
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function Homepage() {

    const {isAuthenticated} = useContext(AuthContext);

    const navigate = useNavigate();

    return <div className={styles["homepage-container"]}>
        <p className={styles["textContainer"]}>
            Find out which D&D class fits you best...
        </p>
        <WaveSine
            size={23}
        />
        {isAuthenticated ? <div className={styles["text-container"]}>
            <Link to="/quiz">
                <h1> Take the quiz </h1>
            </Link>
        </div> : <div>
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
        }
    </div>

}

export default Homepage;