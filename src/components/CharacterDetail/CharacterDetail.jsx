import Markdown from "markdown-to-jsx";
import ClassImage from "../ClassImage/ClassImage.jsx";
import InAppNavigation from "../InAppNavigation/InAppNavigation.jsx";
import {NavigationArrow} from "@phosphor-icons/react";
import styles from "./CharacterDetail.module.css"
import {useState} from "react";

function CharacterDetail({
                             armor,
                             description,
                             equipment,
                             hitdice,
                             HPLevelUp,
                             HPStart,
                             characterName,
                             savingThrows,
                             skill,
                             spellCasting,
                             subclasses,
                             subclassName,
                             table,
                             tools,
                             weapons,
                         }) {

   const [pageNavigationOpen, setPageNavigationOpen] = useState(false);

    return <div className={styles["class-details"]}>
        <div className={styles["page-navigation"]}>
            <InAppNavigation
                navigate="/overview"
            />
            <NavigationArrow
                size={32}
                className={styles["page-navigation-icon"]}
                onClick={() => setPageNavigationOpen(!pageNavigationOpen)}
            />
        </div>

        {pageNavigationOpen && <ul className={styles["page-navigation-items"]}>
            <li>
                <a href="#classfeatures">Class Features</a>
            </li>
            <li>
                <a href="#classabilities">Class Abilities</a>
            </li>
            <li className={styles["class-progression-nav-item"]}>
                <a href="#classprogression">Class Progression</a></li>
            <li>
                <a href="#subclasses">Subclasses</a>
            </li>
        </ul>}

        <div className={styles["class-header"]}>
            <ClassImage
                characterName={characterName}
            />
            <div className={styles["class-header-details"]}>
                <h1>{characterName}</h1>
                <ul className={styles["class-header-details-list"]}>
                    <li>Hit dice: {hitdice}</li>
                    {spellCasting && <li>SpellCasting: {spellCasting}</li>}
                    <li>Saves: {savingThrows}</li>
                </ul>
            </div>
        </div>

        <div className={styles["class-body-details"]}>
            <h2 id="classfeatures">Class Features</h2>
            <h3>Hit Points</h3>
            <ul>
                <li>
                    Hit dice: {hitdice}
                </li>
                <li>
                    HP at first level: {HPStart}
                </li>
                <li>
                    Hit Points at Higher Levels: {HPLevelUp}
                </li>
            </ul>


            <h3>Proficiencies</h3>
            <ul>
                <li>
                    Armor proficiency: {armor}
                </li>
                <li>
                    Weapon proficiency: {weapons}
                </li>
                <li>
                    Tool proficiency: {tools}
                </li>
                <li>
                    Saving throws: {savingThrows}
                </li>
                <li>
                    Skill proficiency: {skill}
                </li>
            </ul>

            <h3>Equipment</h3>
            <ul>
                <li>
                    {equipment}
                </li>
            </ul>


            <h2 id="classabilities">Class Abilities</h2>

            <Markdown>{description}</Markdown>

            <div className={styles["progression-table"]}>
                <h2 id="classprogression">Class Progression</h2>
                <Markdown>{table}</Markdown>
            </div>

            <h2 id="subclasses">{subclassName}</h2>

            <ul>
                {subclasses.map((subclass) => {
                    return (<li key={subclass.slug}>
                            {subclass.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>;
}

export default CharacterDetail;