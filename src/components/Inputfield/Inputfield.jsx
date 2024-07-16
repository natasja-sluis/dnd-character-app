import styles from "./Inputfield.module.css";

function Inputfield({inputtype, label, name}) {
    return <div className={styles["input-container"]}>
        <label htmlFor={label}>{label}</label>
        <input
            type={inputtype}
            id={name}
            name={name}
        />
    </div>
}

export default Inputfield;