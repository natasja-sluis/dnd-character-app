import {useContext} from "react";
import {Link} from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import styles from "/src/pages/AuthenticationPages/AuthenticationPage.module.css"
import {AuthContext} from "../../../context/AuthContext.jsx";
import {useForm} from "react-hook-form";

function LoginPage() {

    const {handleSubmit, register} = useForm();
    const {login} = useContext(AuthContext);


      async function onsubmit(data) {
            login();
            console.log(data);
        }

    return <div className={styles["authentication-page-container"]}>
        <div className={styles["authentication-form"]}>
            <form onSubmit={handleSubmit(onsubmit)}>

                <div className={styles["input-container"]}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        {...register("email")}
                    />
                </div>

                <div className={styles["input-container"]}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        {...register("password")}
                    />
                </div>
                <Button
                    type="submit"
                    text="Log In"
                />
            </form>
            <p className={styles["authentication-message"]}>Don't have an account? <br/> Register <Link
                to="/register">here</Link>
            </p>
        </div>
    </div>
}

export default LoginPage;