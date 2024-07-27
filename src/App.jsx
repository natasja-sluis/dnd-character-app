import './App.css'
import {useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Homepage from "./pages/Homepage/Homepage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import OverviewPage from "./pages/OverviewPage/OverviewPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import DetailPage from "./pages/Detailpage/DetailPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import LoginPage from "./pages/AuthenticationPages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/AuthenticationPages/RegisterPage/RegisterPage.jsx";
import QuizPage from "./pages/QuizPage/QuizPage.jsx";
import {AuthContext} from "./context/AuthContext.jsx";

function App() {

    const {isAuthenticated} = useContext(AuthContext);

    return (
        <>
            <Navigation/>
            <Routes>
                <Route
                    path="/"
                    element={<Homepage/>}
                />
                <Route
                    path="/login"
                    element={<LoginPage/>}
                />
                <Route
                path="/register"
                element={<RegisterPage/>}
                />
                <Route
                path="/quiz"
                element={isAuthenticated ? <QuizPage/> : <Navigate to="/login" />}
                />
                <Route
                    path="/overview"
                    element={isAuthenticated ? <OverviewPage/> : <Navigate to="/login" />}
                />
                <Route
                    path="/profile"
                    element={isAuthenticated ? <ProfilePage/> : <Navigate to="/login"/>}
                />
                <Route
                    path="/class/:characterName"
                    element={isAuthenticated ? <DetailPage/> : <Navigate to="/login"/>}
                />
                <Route
                    path="*"
                    element={<NotFound/>}
                />
            </Routes>
        </>
    )
}

export default App
