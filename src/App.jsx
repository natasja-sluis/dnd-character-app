import './App.css'
import {Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage/Homepage.jsx";

function App() {

    return (
        <>

            <Routes>
                <Route path="/" component={Homepage} />
            </Routes>
        </>
    )
}

export default App
