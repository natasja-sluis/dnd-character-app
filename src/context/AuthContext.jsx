import {createContext, useEffect, useState} from 'react';
import {jwtDecode} from "jwt-decode";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuthenticated, toggleIsAuthenticated] = useState({
        isAuthenticated: false,
        user: null,
        status: "pending",
    });
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            const decoded = jwtDecode(token);
            void fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuthenticated({
                isAuthenticated: false,
                user: null,
                status: "done",
            })
        }
    }, [] );

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
                },
                status: "done",
            })

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error(error);
        }
    }

    const contextData = {
        ...isAuthenticated,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {isAuthenticated.status === "done" ? children : <p className="loading-message">Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
