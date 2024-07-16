import {Link} from 'react-router-dom'
import Inputfield from "../../components/Inputfield/Inputfield.jsx";
import Button from "../../components/Button/Button.jsx";
import styles from "./LogInPage.module.css"


function LogInPage() {

    return <div className={styles["login-container"]}>
        <div className={styles["text-container"]}>
            <h1>Welcome!</h1>
        </div>


        <div className={styles["login-form-container"]}>
            <form>
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
                text="Log In"
                />
            </form>
            <p className={styles["login-message"]}>Don't have an account? <br/> Register <Link to="/register">here</Link></p>
        </div>
    </div>
}

export default LogInPage;