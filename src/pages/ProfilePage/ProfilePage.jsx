import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import styles from "./ProfilePage.module.css"

function ProfilePage() {

    const {user} = useContext(AuthContext);

   console.log(user);

    return <section className={styles["profile-page"]}>
        <p>Name: {user.username} </p>
        <p>Email: {user.email}</p>
        <p>Favourites: </p>
    </section>


}

export default ProfilePage;