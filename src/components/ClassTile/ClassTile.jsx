import {Link} from "react-router-dom";
import ClassImage from "../ClassImage/ClassImage.jsx";
import styles from "./ClassTile.module.css";

function ClassTile({characterName, slug}) {

    return <div className={styles["class-card"]} key={characterName}>
        <ClassImage
            characterName={characterName}
        />
        <Link to={`/class/${slug}`}>
            <div className={styles["title-container"]}>
                <h2 className={styles["name-class-card"]}>{characterName}</h2>
            </div>
        </Link>
    </div>

}

export default ClassTile;