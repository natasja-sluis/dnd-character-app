import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../../components/Button/Button.jsx";
import {WaveSine} from "@phosphor-icons/react";
import styles from "./Homepage.module.css";

function Homepage() {

    const {isAuthenticated} = useContext(AuthContext);

    const navigate = useNavigate();

    return <div className={styles["homepage-container"]}>
        <div className={styles["homepage-image-container"]}>
            <img src="/src/assets/images/dnd-background.jpg" alt=" "/>
            <p className={styles["image-container-text"]}>
            Find out which D&D class fits you best...
        </p>
        </div>
        <WaveSine
            size={23}
        />
        {isAuthenticated ? <div>
            <Link to="/quiz">
                <h1 className={styles["take-the-quiz-link"]}> Take the quiz </h1>
            </Link>
        </div> : <div>
            <Button
                type="button"
                onClick={() => navigate("/login")}
            >
                Log In
            </Button>
            <Button
                type="button"
                onClick={() => navigate("/register")}
            >
                Register
            </Button>
        </div>
        }
    </div>

}

export default Homepage;