import styles from "./QuizCard.module.css";
import Button from "../Button/Button.jsx";

function QuizCard({question, answer1, answer2, answer3, answer4, answer5, number, numbertotal}) {
    return <div className={styles["quiz-card"]}>
        <p>question {number} of {numbertotal}</p>
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
        <Button
        type="button"
        text="next"
        />
    </div>
}

export default QuizCard;