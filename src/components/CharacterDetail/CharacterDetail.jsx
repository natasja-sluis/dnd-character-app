import "./characterDetail.css"
import Markdown from "markdown-to-jsx";
import ClassImage from "../ClassImage/ClassImage.jsx";


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
        <div className="class-header">
            <ClassImage
                name={name}
            />
            <div className="class-header-details">
                <h1>{name}</h1>
                <ul className="class-header-details-list">
                    <li>Hit dice: {hitdice}</li>
                    <li>Spellcasting: {spellCasting}</li>
                    <li>Saves: {savingThrows}</li>
                </ul>
            </div>
        </div>

        <h2>Class Features</h2>

        <details>
            <summary><h3>Hit Points</h3></summary>
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
        </details>

        <details>
            <summary>
                <h3>Proficiencies</h3>
            </summary>
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
        </details>


        <details>
            <summary>
                <h3>Equipment</h3>
            </summary>
            <ul>
                <li>
                    {equipment}
                </li>
            </ul>
        </details>

        <h2>Class Abilities</h2>

        <details>
            <summary>
                <h3>Spellcasting</h3>
            </summary>
            <Markdown>{description}</Markdown>
        </details>

        <details>
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
}

export default CharacterDetail;