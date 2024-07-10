import "./characterDetail.css"
import ClassImage from "../ClassImage/ClassImage.jsx";

function CharacterDetail({name, hitdice, HP, armor, weapons, tools, savingThrows, skill, equipment, subclassName, subclasses}) {
    return <div className="class-details">
        <div>
            <ClassImage
            name={name}
            />
            <h1>{name}</h1>
        </div>
        <h2>Class Features</h2>
        <h3>Hit Points</h3>
        <ul>
            <li>
                Hit dice: {hitdice}
            </li>
            <li>
                HP at first level: {HP}
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
        <h3>Class Abilities</h3>
        <h2>{subclassName}</h2>
        <ul>
            {subclasses.map((subclass) => {
                return (<li key={subclass.slug}>
                            <h3>{subclass.name}</h3>
                    </li>
                )})}
        </ul>
    </div>
}

export default CharacterDetail;