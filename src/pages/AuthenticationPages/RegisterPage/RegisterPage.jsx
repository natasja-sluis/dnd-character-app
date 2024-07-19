import Inputfield from "../../../components/Inputfield/Inputfield.jsx";
import {Link} from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import styles from "/src/pages/AuthenticationPages/AuthenticationPage.module.css"


function RegisterPage() {
    return <div className={styles["authentication-page-container"]}>
        <div className={styles["authentication-form"]}>
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
                    type="button"
                    text="Register"
                    className={styles["login-button"]}
                />
            </form>
            <p className={styles["authentication-message"]}>Already have an account? <br/> Log in <Link to="/login">here</Link>
            </p>
        </div>
    </div>
}

export default RegisterPage;