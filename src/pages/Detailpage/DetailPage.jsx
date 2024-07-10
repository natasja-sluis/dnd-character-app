import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detailPage.css"
import ClassTile from "../../components/ClassTile/ClassTile.jsx";

function DetailPage() {

        const [characterClass, setCharacterClass] = useState({});
        const [loaded, toggleLoaded] = useState(false);
        const [error, toggleError] = useState(false);

        // Somehow I need to convert useParams to a string and then force to Lower Case so the API works.
        const { characterClassName } = useParams();

        useEffect(() => {
            toggleLoaded(false);
            toggleError(false);
            const controller = new AbortController();
            const getCharacterClass = async () => {
                try {
                    const response = await axios.get("https://api.open5e.com/v1/classes/cleric",
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
        }, [ characterClassName ])


        return <>
            <main className="outer-content-container">
                <section className="all-classes-section">
                    <div className="inner-container">
                        {!loaded && <div className="loading-message">Loading...</div>}
                        {error && <p className="error-message">Sorry, something went wrong.</p>}
                        {loaded && !error &&
                            <ClassTile
                                key={characterClass.name}
                                name={characterClass.name}
                                />
                        }
                    </div>
                </section>
            </main>
        </>
}

export default DetailPage;