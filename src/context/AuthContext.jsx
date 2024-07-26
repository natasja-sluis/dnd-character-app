import {createContext, useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {isTokenValid} from "../utils/isTokenValid.js";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuthenticated, toggleIsAuthenticated] = useState({
        isAuthenticated: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token || !isTokenValid(token)) {
            toggleIsAuthenticated({
                isAuthenticated: false,
                user: null,
                status: "done",
            });
            return;
        }

        const decoded = jwtDecode(token);
        void fetchUserData(decoded.sub, token);

    }, [isAuthenticated.user]);

    function login(JWT) {
        localStorage.setItem("token", JWT);
        const decoded = jwtDecode(JWT);

        void fetchUserData(decoded.sub, JWT, "/profile");
    }

    function logout() {
        localStorage.clear();
        toggleIsAuthenticated({
            isAuthenticated: false,
            user: null,
            status: "done",
        })
        navigate("/");
    }

    async function fetchUserData(username, token, redirectUrl) {
        try {
            const result = await axios.get(`https://api.datavortex.nl/classesdndapp/users/${username}`, {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            toggleIsAuthenticated({
                ...isAuthenticated,
                isAuthenticated: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    info: result.data.info,
                },
                status: "done",
            })

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            toggleIsAuthenticated({
                ...isAuthenticated,
                isAuthenticated: false,
                user: null,
                status: "done",
            })
        }
    }

        async function setUserInfoFavourites(favourites) {
            const token = localStorage.getItem("token");
            const username = isAuthenticated.user && isAuthenticated.user.username;

            if (!username) {
                console.error('no username found');
                return;
            }

            try {
                const payload = favourites.join(',');
                await axios.put(`https://api.datavortex.nl/classesdndapp/users/${username}`, {
                        "info": payload,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                            'X-Api-Key': 'classesdndapp:gojvJ2W0a5H9EWvzN8bl',
                        },
                    }
                )
            } catch (error) {
                console.error(error);
            }}

    const contextData = {
        ...isAuthenticated,
        login,
        logout,
        setUserInfoFavourites,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {isAuthenticated.status === "done" ? children : <p className="loading-message">Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
