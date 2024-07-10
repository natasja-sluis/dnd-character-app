import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage/Homepage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import LogInPage from "./pages/LogInPage/LogInPage.jsx";
import OverviewPage from "./pages/OverviewPage/OverviewPage.jsx";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage.jsx";
import DetailPage from "./pages/Detailpage/DetailPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {

    return (
        <>
            <Navigation />
            <Routes>
                <Route
                    path="/"
                    element={<Homepage />}
                />
                <Route
                    path="/log-in"
                    element={<LogInPage />}
                />
                <Route
                    path="/overview"
                    element={<OverviewPage />}
                />
                <Route
                    path="/favourites"
                    element={<FavouritesPage />}
                />
                <Route
                    path="/class/:characterClass"
                    element={<DetailPage />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    )
}

export default App
