import {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    function login() {
       toggleIsAuthenticated(true);
       navigate("/");
    }

    function logout() {
       toggleIsAuthenticated(false);
        navigate("/");
    }

    const contextData = {
        isAuthenticated: isAuthenticated,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;
