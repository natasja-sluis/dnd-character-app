import getPicture from "../../utils/getPicture.js";
import {Heart} from "@phosphor-icons/react";
import "./classTile.css";

function ClassTile({name}) {
    return<div className="class-card" key={name}>
        <div className="image-container">
            <img src={getPicture(name)}
                 alt={name}/>
            <Heart
                className="favourite-icon"
            />
        </div>
        <div className="title-container">
            <h2>{name}</h2>
        </div>
    </div>
}

export default ClassTile;