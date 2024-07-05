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
        <main>
            <h1>All Classes</h1>
            <section className="all-classes-section">
                {!loaded && <div>Loading...</div>}
                {error && <p>Sorry, something went wrong.</p>}
                {loaded && !error && classes.results.map((result) => {
                    return <div className="class-card" key={result.name}>
                        <div className="image-container">
                            <img src="/src/assets/images/dnd-character-dwarf-female-barbarian-in-the-mountains.jpg"
                                 alt="Barbarian"/>
                            <Heart
                                className="favourite-icon"
                            />
                        </div>
                        <div className="title-container">
                            <h2>{result.name}</h2>
                        </div>
                    </div>
                })}
            </section>
        </main>
    </>
}

export default OverviewPage;