import styles from "./QuizCard.module.css";


function QuizCard({children, question, number, option1, option2, option3, option4, option5}) {
    return <div className={styles["quiz-card"]}>
        <h3>{number} {question}</h3>
        <ul>
            <li>
                {option1}
            </li>
            <li>
                {option2}
            </li>
            <li>
                {option3}
            </li>
            <li>
                {option4}
            </li>
            <li>
                {option5}
            </li>
        </ul>
        {children}
    </div>
}

export default QuizCard;