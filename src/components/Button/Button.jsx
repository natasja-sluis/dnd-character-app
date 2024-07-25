import {useNavigate} from 'react-router-dom';
import "./Button.module.css"

function Button({type, text, linkTo}) {

    const navigate = useNavigate();

    return <button
        type={type}
        onClick={() => navigate({linkTo})}
    >
        {text}
    </button>
}

export default Button;