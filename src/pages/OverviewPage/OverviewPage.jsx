import {useState, useEffect} from 'react'
import axios from "axios";
import {useForm} from "react-hook-form";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";
import {Funnel} from "@phosphor-icons/react";
import styles from "./OverviewPage.module.css"

function OverviewPage() {

    const {register} = useForm();
    const [classes, setClasses] = useState([]);
    const [loaded, toggleLoaded] = useState(false);
    const [error, toggleError] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");



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

    const filteredClasses = !searchTerm ? classes.results : classes.results.filter((result) => result.name.toLowerCase().includes(searchTerm.toLowerCase()));


    return <>
        <main className={styles["outer-content-container"]}>
            <h1>All Classes</h1>
            <section className={styles["search-section"]}>
                <div className={styles["search-field"]}>
                    <form className={styles["search-form"]}>
                        <label htmlFor="searchTerm"></label>
                        <input
                            className="search-class-input"
                            type="text"
                            name="searchTerm"
                            id="searchTerm"
                            placeholder="Search..."
                            {...register("searchTerm", {
                                onChange: (e) => {
                                    setSearchTerm(e.target.value);
                                },
                            })}
                            required={true}
                        />
                    </form>

                    <Funnel
                        size={32}
                    />
                </div>
            </section>

            <section className={styles["all-classes-section"]}>
                <div className={styles["inner-container"]}>
                    {!loaded && <div className="loading-message">Loading...</div>}
                    {error && <p className="error-message">Sorry, something went wrong.</p>}
                    {loaded && !error && filteredClasses.map((result) => {
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