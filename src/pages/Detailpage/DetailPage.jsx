import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail.jsx";
import styles from "./DetailPage.module.css"

function DetailPage() {

    const [characterClass, setCharacterClass] = useState({});
    const [loaded, toggleLoaded] = useState(false);
    const [error, toggleError] = useState(false);


    const {characterClassName} = useParams();

    useEffect(() => {
        toggleLoaded(false);
        toggleError(false);
        const controller = new AbortController();
        const getCharacterClass = async () => {
            try {
                const response = await axios.get(`https://api.open5e.com/v1/classes/${characterClassName}/`,
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
    }, [characterClassName])


    return <>

        <main className={styles["outer-content-container"]}>
                <section className={styles["character-detail-container"]}>
                    {!loaded && <div className={styles["loading-message"]}>Loading...</div>}
                    {error && <p className={styles["error-message"]}>Sorry, something went wrong.</p>}
                    {loaded && !error &&
                        <CharacterDetail
                            armor={characterClass.prof_armor}
                            description={characterClass.desc}
                            equipment={characterClass.equipment}
                            hitdice={characterClass.hit_dice}
                            HPLevelUp={characterClass.hp_at_higher_levels}
                            HPStart={characterClass.hp_at_1st_level}
                            name={characterClass.name}
                            savingThrows={characterClass.prof_saving_throws}
                            skill={characterClass.prof_skills}
                            spellCasting={characterClass.spellcasting_ability}
                            subclasses={characterClass.archetypes}
                            subclassName={characterClass.subtypes_name}
                            table={characterClass.table}
                            tools={characterClass.prof_tools}
                            weapons={characterClass.prof_weapons}
                        />
                    }
                </section>
        </main>
    </>
}

export default DetailPage;