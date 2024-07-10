import {useState, useEffect} from 'react'
import axios from "axios";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";
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
                        return <ClassTile
                        key={result.name}
                        name={result.name}
                        slug={result.slug}
                        />
                    })}
                </div>
            </section>
        </main>
    </>
}

export default OverviewPage;