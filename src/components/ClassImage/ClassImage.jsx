import "./classImage.css";
import getPicture from "../../utils/getPicture.js";
import {Heart} from "@phosphor-icons/react";

function ClassImage({name}) {
    return <div className="image-container">
        <img src={getPicture(name)}
             alt={name}/>
        <Heart
            className="favourite-icon"
            size={32}
            weight="bold"
            color="white"
        />
    </div>
}

export default ClassImage;