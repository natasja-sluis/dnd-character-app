import styles from "./ProfilePage.module.css"
import ClassTile from "../../components/ClassTile/ClassTile.jsx";

function ProfilePage() {
    return <div>
        <h1>Profile</h1>
        <p>Name: </p>
        <p>Email: </p>
        <p>Favourites: </p>
        <ClassTile
        name="Druid"
        slug="druid"
        />
        <ClassTile
        name="Wizard"
        slug="wizard"
        />
    </div>
}

export default ProfilePage;