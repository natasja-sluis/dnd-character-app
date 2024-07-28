import styles from "./Button.module.css";

function Button({type, className, children, ...restProps}) {

    return <button
        type={type}
        className={`${styles.button} ${className}`}
        {...restProps}
    >
        {children}
    </button>
}

export default Button;