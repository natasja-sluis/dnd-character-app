import Button from "../../components/Button/Button.jsx";
import {WaveSine} from "@phosphor-icons/react"
import styles from "./Homepage.module.css"




function Homepage() {
    return <div className={styles["homepage-container"]}>
        <div className={styles["text-container"]}>
            <h1 >Take the quiz</h1>
            <WaveSine
                size={23}
            />
        </div>
        <div className={styles["button-container"]}>
            <p className={styles["message"]}>Or...</p>
            <Button
                type="button"
                text="All Classes"
            />
            <Button
                type="button"
                text="Favourites"
            />
        </div>
    </div>
}

export default Homepage;