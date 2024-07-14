import {ArrowLeft} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import "./InAppNavigation.module.css"

function InAppNavigation({navigate}) {
    return <div className="in-app-navigation">
        <Link to={navigate}>
            <ArrowLeft size={50} />
        </Link>
    </div>
}

export default InAppNavigation;