import "./CharacterDetail.module.css"
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
    return <div className="class-details">
        <InAppNavigation
            navigate="/overview"
        />
        <div className="class-header">
            <ClassImage
                name={name}
            />
            <div className="class-header-details">
                <h1>{name}</h1>
                <ul className="class-header-details-list">
                    <li>Hit dice: {hitdice}</li>
                    {spellCasting && <li>SpellCasting: {spellCasting}</li>}
                    <li>Saves: {savingThrows}</li>
                </ul>
            </div>
        </div>

        <div className="class-body-details">

            <details>
                <summary><h2>Class Features</h2></summary>
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
            </details>

            <details>
                <summary>
                    <h2>Class Abilities</h2>
                </summary>
                <Markdown>{description}</Markdown>
            </details>

            <details className="progression-table">
                <summary>
                    <h2>Class Progression</h2>
                </summary>
                <Markdown>{table}</Markdown>
            </details>

            <details>
                <summary>
                    <h2>{subclassName}</h2>
                </summary>
                <ul>
                    {subclasses.map((subclass) => {
                        return (<li key={subclass.slug}>
                                {subclass.name}
                            </li>
                        )
                    })}
                </ul>
            </details>
        </div>
    </div>
}

export default CharacterDetail;