import {useContext} from "react";
import getPicture from "../../utils/getPicture.js";
import {Heart} from "@phosphor-icons/react";
import styles from "./ClassImage.module.css";
import {AuthContext} from "../../context/AuthContext.jsx";

function ClassImage({name}) {

   const {favourites} = useContext(AuthContext);

    return <div className={styles["image-container"]}>
        <img src={getPicture(name.toLowerCase())}
             alt={name}/>
        <Heart
            className={styles["favourite-icon"]}
            size={32}
            weight="fill"
            fill="white"
            onClick={() =>  favourites.push(name)}
        />
    </div>
}

export default ClassImage;