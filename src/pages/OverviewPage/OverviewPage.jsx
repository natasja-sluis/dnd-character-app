import {useState, useEffect} from 'react'
import axios from "axios";
import {Heart} from "@phosphor-icons/react";
import "./overviewPage.css"

function OverviewPage() {
    const [classes, setClasses] = useState({});
    const [loaded, toggleLoaded] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        toggleLoaded(false);
        toggleError(false);
        const controller = new AbortController();
        const getClasses = async () => {
            try {
                const response = await axios.get("https://api.open5e.com/classes",
                    {
                        signal: controller.signal,
                    });
                console.log(response);
                setClasses(response.data);
                return function cleanup() {
                    controller.abort();
                }
            } catch (error) {
                toggleError(true);
            } finally {
                toggleLoaded(true);
            }
        }
        getClasses();
    }, [])


    return <>
        <main className="outer-content-container">
            <h1>All Classes</h1>
            {!loaded && <div>Loading...</div>}
            {error && <p>Sorry, something went wrong.</p>}
            <ul>{loaded && !error && classes.results.map((result) => {
                return <li className="class-container" key={result.name}>
                    <div>
                        <h2>{result.name}</h2>
                        <Heart
                        className="favourite-icon"
                        />
                        <div className="image-container">
                            <img src="/src/assets/images/dnd-character-dwarf-female-barbarian-in-the-mountains.jpg"
                                 alt="Barbarian"/>
                        </div>
                    </div>
                </li>
            })}
            </ul>
        </main>
    </>


}

export default OverviewPage;