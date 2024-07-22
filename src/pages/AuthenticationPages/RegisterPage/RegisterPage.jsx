import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Button from "../../../components/Button/Button.jsx";
import styles from "/src/pages/AuthenticationPages/AuthenticationPage.module.css"


function RegisterPage() {

    const {handleSubmit, register} = useForm();

    async function onsubmit(data) {
        console.log(data);
    }

    return <div className={styles["authentication-page-container"]}>
        <div className={styles["authentication-form"]}>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className={styles["input-container"]}>
                    <label htmlFor="username">Username:</label>

                    <input
                        type="text"
                        name="username"
                        id="username"
                        {...register("username")}
                    />
                </div>

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
                        text="Register"
                        className={styles["login-button"]}
                    />
            </form>
            <p className={styles["authentication-message"]}>Already have an account? <br/> Log in <Link
                to="/login">here</Link>
            </p>
        </div>
    </div>
}

export default RegisterPage;