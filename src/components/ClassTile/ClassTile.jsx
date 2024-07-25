import {Link} from "react-router-dom";
import ClassImage from "../ClassImage/ClassImage.jsx";
import styles from "./ClassTile.module.css";

function ClassTile({characterName, slug}) {

    return <Link to={`/class/${slug}`}>
            <div className={styles["class-card"]} key={characterName}>
               <ClassImage
               characterName={characterName}
               />
                <div className={styles["title-container"]}>
                    <h2>{characterName}</h2>
                </div>
            </div>
        </Link>
}

export default ClassTile;