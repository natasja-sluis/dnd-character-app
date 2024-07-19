import {useContext} from "react";
import {Link} from "react-router-dom";
import Inputfield from "../../../components/Inputfield/Inputfield.jsx";
import Button from "../../../components/Button/Button.jsx";
import styles from "/src/pages/AuthenticationPages/AuthenticationPage.module.css"
import {AuthContext} from "../../../context/AuthContext.jsx";

function LoginPage() {

        const {login} = useContext(AuthContext);

        function handleSubmit(e) {
            e.preventDefault();
            login();
            console.log("logged in");
        }

    return <div className={styles["authentication-page-container"]}>
        <div className={styles["authentication-form"]}>
            <form onSubmit={handleSubmit}>
                <Inputfield
                    inputtype="email"
                    name="email"
                    label="Email:"
                    register="email"
                />
                <Inputfield
                    inputtype="password"
                    name="password"
                    label="Password:"
                    register="password"
                />
                <Button
                    type="submit"
                    text="Log In"
                />
            </form>
            <p className={styles["authentication-message"]}>Don't have an account? <br/> Register <Link
                to="/register">here</Link>
            </p>
        </div>
    </div>}

export default LoginPage;