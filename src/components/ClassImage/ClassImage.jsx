import getPicture from "../../utils/getPicture.js";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {Heart} from "@phosphor-icons/react";
import styles from "./ClassImage.module.css";

function ClassImage({characterName}) {

    const {user, setUserInfoFavourites} = useContext(AuthContext);

    const currentFavourites = user.info ? user.info.split(",") : [];

    const isFavourite = currentFavourites.includes(characterName);

    function handleFavourites() {
        const newFavourites = [...currentFavourites];

        if (isFavourite) {
            const index = currentFavourites.indexOf(characterName);
            newFavourites.splice(index, 1);
        } else {
            newFavourites.push(characterName);
        }
        setUserInfoFavourites(newFavourites);
    }

    return <div className={styles["image-container"]}>
        <img src={getPicture(characterName.toLowerCase())}
             alt={characterName}/>
        <Heart
            className={styles["favourite-icon"]}
            size={32}
            weight="fill"
            fill={isFavourite ? "red" : "white"}
            onClick={handleFavourites}
        />
    </div>
}

export default ClassImage;