import {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuthenticated, toggleIsAuthenticated] = useState({
        isAuthenticated: false,
        user: null,
    });
    const navigate = useNavigate();

    function login() {
       toggleIsAuthenticated({
           isAuthenticated: true,
           user: null,
       });
       navigate("/");
    }

    function logout() {
       toggleIsAuthenticated(false);
        navigate("/");
    }

    const contextData = {
        ...isAuthenticated,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;
