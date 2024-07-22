import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext.jsx";
import {useForm} from "react-hook-form";
import axios from "axios"
import Button from "../../../components/Button/Button.jsx";
import styles from "/src/pages/AuthenticationPages/AuthenticationPage.module.css"

function LoginPage() {

    const {handleSubmit, register} = useForm();
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);

    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, [source]);


    async function onSubmit(data) {
        toggleError(false);

        try {
            const response = await axios.post("https://api.datavortex.nl/classesdndapp/users/authenticate", {
                "username": data.username,
                "password": data.password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'classesdndapp:gojvJ2W0a5H9EWvzN8bl',
                }
            }, {
                cancelToken: source.token,
            });
            login(response.data.jwt);
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
    }

    return <div className={styles["authentication-page-container"]}>
        {error && <p className="error-message">Something went wrong...</p>}
        <div className={styles["authentication-form"]}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles["input-container"]}>
                    <label htmlFor="email">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        {...register("username")}
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