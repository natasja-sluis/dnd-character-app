import {Link} from "react-router-dom";
import "./ClassTile.module.css";
import ClassImage from "../ClassImage/ClassImage.jsx";

function ClassTile({name, slug}) {

    return <Link to={`/class/${slug}`}>
            <div className="class-card" key={name}>
               <ClassImage
               name={name}
               />
                <div className="title-container">
                    <h2>{name}</h2>
                </div>
            </div>
        </Link>
}

export default ClassTile;