import getPicture from "../../utils/getPicture.js";
import {Heart} from "@phosphor-icons/react";
import styles from "./ClassImage.module.css";

function ClassImage({name}) {
    return <div className={styles["image-container"]}>
        <img src={getPicture(name)}
             alt={name}/>
        <Heart
            className={styles["favourite-icon"]}
            size={32}
            weight="bold"
            color="white"
        />
    </div>
}

export default ClassImage;