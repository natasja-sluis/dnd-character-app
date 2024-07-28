import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail.jsx";
import styles from "./DetailPage.module.css";

function DetailPage() {

    const [character, setCharacter] = useState({});
    const [loaded, toggleLoaded] = useState(false);
    const [error, toggleError] = useState(false);

    const {characterName} = useParams();

    useEffect(() => {
        toggleLoaded(false);
        toggleError(false);
        const controller = new AbortController();
        const getCharacter = async () => {
            try {
                const response = await axios.get(`https://api.open5e.com/v1/classes/${characterName.toLowerCase()}/`,
                    {
                        signal: controller.signal,
                    });
                setCharacter(response.data);
                return function cleanup() {
                    controller.abort();
                }
            } catch (error) {
                toggleError(true);
            } finally {
                toggleLoaded(true);
            }
        }
        getCharacter();
    }, [characterName])


    return <>

        <main className={styles["outer-content-container"]}>
                <section className={styles["character-detail-container"]}>
                    {!loaded && <div className={styles["loading-message"]}>Loading...</div>}
                    {error && <p className={styles["error-message"]}>Sorry, something went wrong.</p>}
                    {loaded && !error &&
                        <CharacterDetail
                            armor={character.prof_armor}
                            description={character.desc}
                            equipment={character.equipment}
                            hitdice={character.hit_dice}
                            HPLevelUp={character.hp_at_higher_levels}
                            HPStart={character.hp_at_1st_level}
                            characterName={character.name}
                            savingThrows={character.prof_saving_throws}
                            skill={character.prof_skills}
                            spellCasting={character.spellcasting_ability}
                            subclasses={character.archetypes}
                            subclassName={character.subtypes_name}
                            table={character.table}
                            tools={character.prof_tools}
                            weapons={character.prof_weapons}
                        />
                    }
                </section>
        </main>
    </>
}

export default DetailPage;