import styles from "./QuizCard.module.css";


function QuizCard({question, answer1, answer2, answer3, answer4, answer5, number, numbertotal}) {
    return <div className={styles["quiz-card"]}>
        <h1>{question}</h1>
        <ul>
            <li>
                {answer1}
            </li>
            <li>
                {answer2}
            </li>
            <li>
                {answer3}
            </li>
            <li>
                {answer4}
            </li>
            <li>
                {answer5}
            </li>
        </ul>
    </div>
}

export default QuizCard;