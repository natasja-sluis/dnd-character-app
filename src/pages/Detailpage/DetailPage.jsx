import {useState, useEffect} from "react";
import axios from "axios";
import "./detailPage.css"
import ClassTile from "../../components/ClassTile/ClassTile.jsx";

function DetailPage() {

        const [characterClass, setCharacterClass] = useState({});
        const [loaded, toggleLoaded] = useState(false);
        const [error, toggleError] = useState(false);

        useEffect(() => {
            toggleLoaded(false);
            toggleError(false);
            const controller = new AbortController();
            const getCharacterClass = async () => {
                try {
                    const response = await axios.get("https://api.open5e.com/classes/cleric",
                        {
                            signal: controller.signal,
                        });
                    setCharacterClass(response.data);
                    return function cleanup() {
                        controller.abort();
                    }
                } catch (error) {
                    toggleError(true);
                } finally {
                    toggleLoaded(true);
                }
            }
            getCharacterClass();
        }, [])


        return <>
            <main className="outer-content-container">
                <section className="all-classes-section">
                    <div className="inner-container">
                        {!loaded && <div className="loading-message">Loading...</div>}
                        {error && <p className="error-message">Sorry, something went wrong.</p>}
                        {loaded && !error &&
                            <ClassTile
                                name={characterClass.name}
                                key={characterClass.name}
                                />
                        }
                    </div>
                </section>
            </main>
        </>
}

export default DetailPage;