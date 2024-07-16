import styles from "../LogInPage/LogInPage.module.css";
import Inputfield from "../../components/Inputfield/Inputfield.jsx";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

function Register() {
    return <div className={styles["login-container"]}>
        <div className={styles["text-container"]}>
            <h1>Welcome!</h1>
        </div>
        <div className={styles["login-form-container"]}>
            <form>
            <Inputfield
                    inputtype="text"
                    name="username"
                    label="Username:"
                />
                <Inputfield
                    inputtype="email"
                    name="email"
                    label="Email:"
                />
                <Inputfield
                    inputtype="password"
                    name="password"
                    label="Password:"
                />
                <Button
                    input="button"
                    text="Register"
                    className={styles["login-button"]}
                />
            </form>
            <p className={styles["login-message"]}>Already have an account? <br/> Log in <Link to="/log-in">here</Link>
            </p>
        </div>
    </div>
}

export default Register;