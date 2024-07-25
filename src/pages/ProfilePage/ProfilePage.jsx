import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import styles from "./ProfilePage.module.css"
import ClassTile from "../../components/ClassTile/ClassTile.jsx";

function ProfilePage() {

    const {user} = useContext(AuthContext);
    console.log(user);

    const favourites = user.info && user.info.split(",");

    return <section className={styles["profile-page"]}>
        <p>Name: {user.username} </p>
        <p>Email: {user.email}</p>
        <section className={styles["favourites-section"]}>
            {favourites && <>
                <h2>Favourites:</h2>
                <div className={styles["inner-container"]}>
                    {favourites.map((favourite) => {
                        return <ClassTile
                            key={favourite}
                            name={favourite.toLocaleUpperCase()}
                            slug={favourite.toLowerCase()}
                        />
                    })}
                </div>
            </>
            }
        </section>
    </section>
}

export default ProfilePage;