import {useState, useEffect} from 'react'
import axios from "axios";
import {Heart} from "@phosphor-icons/react";
import "./overviewPage.css"
import getPicture from "../../utils/getPicture.js";

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
            <section className="all-classes-section">
                <div className="inner-container">
                    {!loaded && <div className="loading-message">Loading...</div>}
                    {error && <p className="error-message">Sorry, something went wrong.</p>}
                    {loaded && !error && classes.results.map((result) => {
                        return <div className="class-card" key={result.name}>
                            <div className="image-container">
                                <img src={getPicture(result.name)}
                                     alt={result.name}/>
                                <Heart
                                    className="favourite-icon"
                                />
                            </div>
                            <div className="title-container">
                                <h2>{result.name}</h2>
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </main>
    </>
}

export default OverviewPage;