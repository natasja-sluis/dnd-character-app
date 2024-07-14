import {Link} from "react-router-dom";
import ClassImage from "../ClassImage/ClassImage.jsx";
import styles from "./ClassTile.module.css";

function ClassTile({name, slug}) {

    return <Link to={`/class/${slug}`}>
            <div className={styles["class-card"]} key={name}>
               <ClassImage
               name={name}
               />
                <div className={styles["title-container"]}>
                    <h2>{name}</h2>
                </div>
            </div>
        </Link>
}

export default ClassTile;