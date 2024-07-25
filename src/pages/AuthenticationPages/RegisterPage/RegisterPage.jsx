import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import styles from "/src/pages/AuthenticationPages/AuthenticationPage.module.css"

function RegisterPage() {

    const {handleSubmit, register} = useForm();

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const navigate = useNavigate();

    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, [source]);


    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        try {
         await axios.post("https://api.datavortex.nl/classesdndapp/users",  {
                "username": data.username,
                "email": data.email,
                "password": data.password,
                "authorities": [
                {
                    "authority": "USER"
                }
            ]}, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'classesdndapp:gojvJ2W0a5H9EWvzN8bl',
                }
            }, {
                cancelToken: source.token,
            });
            navigate("/login")
        } catch (error) {
            console.error(error);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return <div className={styles["authentication-page-container"]}>

        {error && <p className="error-message">Something went wrong...</p>}

        <div className={styles["authentication-form"]}>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <button
                    type="submit"
                    className={styles["login-button"]}
                    disabled={loading}
                >
                    Register
                </button>

            </form>
            <p className={styles["authentication-message"]}>Already have an account? <br/> Log in <Link
                to="/login">here</Link>
            </p>
        </div>
    </div>
}

export default RegisterPage;