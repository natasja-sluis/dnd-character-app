import styles from "./QuizCard.module.css";


function QuizCard({question, number, option}) {
    return <div className={styles["quiz-card"]}>
        <h4 className={styles["quiz-card-question"]}>{number}. {question}</h4>
        <ul>
            {option.map((option) => {
                return <li key={option}>{option}</li>;
            })}
        </ul>
    </div>
}

export default QuizCard;