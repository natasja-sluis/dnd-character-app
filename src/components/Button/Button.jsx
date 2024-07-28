import styles from "./Button.module.css";

function Button({type, className, children, ...restProps}) {

    return <button
        type={type}
        className={`${className} ${styles.button}`}
        {...restProps}
    >
        {children}
    </button>
}

export default Button;