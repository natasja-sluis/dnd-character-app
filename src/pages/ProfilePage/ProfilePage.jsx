import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";
import styles from "./ProfilePage.module.css";

function ProfilePage() {

    const {user} = useContext(AuthContext);

    const favourites = user.info ? user.info.split(",") : undefined;


    return <section className={styles["profile-page"]}>
        <h1>Welcome {user.username}!</h1>
        <section>
            <p>Name: <em>{user.username} </em></p>
            <p>Email: <em>{user.email}</em></p>
        </section>
        <section className={styles["favourites-section"]}>
            <h2>Favourites:</h2>
            {favourites ? <>
            <div className={styles["inner-container"]}>
                {favourites.map((favourite) => {
                    return <ClassTile
                        key={favourite}
                        characterName={favourite}
                        slug={favourite.toLowerCase()}
                    />
                })}
            </div>
        </> : <p>Browse <Link to="/overview">all classes</Link> to add your favourites here or <Link to="/quiz">take the quiz</Link></p>
        }
        </section>
    </section>
}

export default ProfilePage;