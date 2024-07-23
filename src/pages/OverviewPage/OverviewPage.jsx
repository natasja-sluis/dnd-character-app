import {useState, useEffect} from 'react'
import axios from "axios";
import {useForm} from "react-hook-form";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";
import {MagnifyingGlass, Funnel} from "@phosphor-icons/react";
import styles from "./OverviewPage.module.css"

function OverviewPage() {

    const {handleSubmit, register} = useForm();

    const [classes, setClasses] = useState({});
    const [loadedAllClasses, toggleLoadedAllClasses] = useState(false);
    const [errorAllClasses, toggleErrorAllClasses] = useState(false);
    const [singleClass, setSingleClass] = useState({});
    const [loadedSingleClass, toggleLoadedSingleClass] = useState(false);
    const [errorSingleClass, toggleErrorSingleClass] = useState(false);


    useEffect(() => {
        toggleLoadedAllClasses(false);
        toggleErrorAllClasses(false);
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
                toggleErrorAllClasses(true);
            } finally {
                toggleLoadedAllClasses(true);
            }
        }
        getClasses();
    }, [])

        async function fetchSingleClass(data) {
            toggleErrorSingleClass(false);
            toggleLoadedSingleClass(false);
            try {
                const response = await axios.get(`https://api.open5e.com/classes/${data.classname.toLowerCase()}/`)
                setSingleClass(response.data);
                toggleLoadedSingleClass(true);
            } catch(error) {
                console.error(error);
                toggleErrorSingleClass(true);
            }
        }

    return <>
        <main className={styles["outer-content-container"]}>
            <h1>All Classes</h1>
            <section className={styles["search-section"]}>
                <form onSubmit={handleSubmit(fetchSingleClass)}>
                    <label htmlFor="classname"></label>
                    <input
                        className="search-class-input"
                        type="text"
                        name="classname"
                        id="classname"
                        placeholder="Please enter a class..."
                        {...register("classname")}
                        required={true}
                    />
                        <MagnifyingGlass
                            size={32}
                        />
                    <Funnel size={32}/>
                </form>
            </section>

            <section className={styles["all-classes-section"]}>
                {loadedSingleClass && !errorSingleClass ? <ClassTile
                    key={singleClass.id}
                    name={singleClass.name}
                    slug={singleClass.slug}
                /> : <div className={styles["inner-container"]}>
                    {!loadedAllClasses && <div className={styles["loading-message"]}>Loading...</div>}
                    {errorAllClasses && <p className={styles["error-message"]}>Sorry, something went wrong.</p>}
                    {loadedAllClasses && !errorAllClasses && classes.results.map((result) => {
                        return <ClassTile
                            key={result.name}
                            name={result.name}
                            slug={result.slug}
                        />
                    })}
                </div>}
            </section>
        </main>
    </>
}

export default OverviewPage;