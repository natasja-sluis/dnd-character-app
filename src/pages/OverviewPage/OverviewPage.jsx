import {useState, useEffect} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import Button from "../../components/Button/Button.jsx";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";
import {Backspace, Funnel} from "@phosphor-icons/react";
import styles from "./OverviewPage.module.css";

function OverviewPage() {

    const {register} = useForm();
    const [classes, setClasses] = useState([]);
    const [loaded, toggleLoaded] = useState(false);
    const [error, toggleError] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [menuOpen, toggleMenuOpen] = useState(false);
    const [spellCastingAbility, setSpellCastingAbility] = useState("");


    useEffect(() => {
        toggleLoaded(false);
        toggleError(false);
        const controller = new AbortController();
        const getClasses = async () => {
            try {
                if (spellCastingAbility) {
                    const response = await axios.get(`https://api.open5e.com/v1/classes/?spellcasting_ability__icontains=${spellCastingAbility}`,
                        {
                            signal: controller.signal,
                        });
                    setClasses(response.data);
                } else {
                    const response = await axios.get("https://api.open5e.com/classes",
                        {
                            signal: controller.signal,
                        });
                    setClasses(response.data);
                }
                return function cleanup() {
                    controller.abort();
                }
            } catch (error) {
                toggleError(true);
            } finally {
                toggleLoaded(true);
            }
        }
        void getClasses();
    }, [spellCastingAbility])

    const filteredClasses = !searchTerm ? classes.results : classes.results.filter((result) => result.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return <>
        <main className={styles["outer-content-container"]}>
            <h1>All Classes</h1>
            <section className={styles["search-section"]}>
                <div className={styles["search-field"]}>
                    <form className={styles["search-form"]}>
                        <label htmlFor="searchTerm"></label>
                        <input
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
                        className={styles["search-icons"]}
                        onClick={() => toggleMenuOpen(!menuOpen)}
                        size={32}
                    />
                    <Backspace
                        className={styles["search-icons"]}
                        size={32}
                        onClick={() => setSpellCastingAbility("")}
                    />
                </div>

                <ul className={menuOpen ? styles["open-menu"] : styles["closed-menu"]}>
                    <li>
                        Filter on Spell Casting Ability
                    </li>
                    <li>
                        <Button
                            className={styles["filter-button"]}
                            type="button"
                            onClick={() => setSpellCastingAbility("charisma")}
                        >
                            Charisma
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={styles["filter-button"]}
                            type="button"
                            onClick={() => setSpellCastingAbility("wisdom")}
                        >
                            Wisdom
                        </Button>
                    </li>
                    <li>
                        <Button
                            className={styles["filter-button"]}
                            type="button"
                            onClick={() => setSpellCastingAbility("intelligence")}
                        >
                            Intelligence
                        </Button>
                    </li>
                </ul>
            </section>

            <section className={styles["all-classes-section"]}>
                <div className={styles["inner-container"]}>
                    {!loaded && <div className="loading-message">Loading...</div>}
                    {error && <p className="error-message">Sorry, something went wrong.</p>}
                    {loaded && !error && filteredClasses.map((result) => {
                        return <ClassTile
                            key={result.name}
                            characterName={result.name}
                            slug={result.slug}
                        />
                    })}
                </div>
            </section>
        </main>
    </>
}

export default OverviewPage;