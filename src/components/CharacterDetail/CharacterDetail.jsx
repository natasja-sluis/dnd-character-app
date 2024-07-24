import styles from "./CharacterDetail.module.css"
import Markdown from "markdown-to-jsx";
import ClassImage from "../ClassImage/ClassImage.jsx";
import InAppNavigation from "../InAppNavigation/InAppNavigation.jsx";

function CharacterDetail({
                             armor,
                             description,
                             equipment,
                             hitdice,
                             HPLevelUp,
                             HPStart,
                             name,
                             savingThrows,
                             skill,
                             spellCasting,
                             subclasses,
                             subclassName,
                             table,
                             tools,
                             weapons,
                         }) {

    return <div className={styles["class-details"]}>
        <InAppNavigation
            navigate="/overview"
        />
        <div className={styles["class-header"]}>
            <ClassImage
                name={name}
            />
            <div className={styles["class-header-details"]}>
                <h1>{name}</h1>
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
                <h2>Class Progression</h2>
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