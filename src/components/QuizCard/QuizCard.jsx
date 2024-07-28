import Button from "../Button/Button.jsx";
import styles from "./QuizCard.module.css";

function QuizCard({question, currentIndex, nextQuestion, selectedAnswers, setSelectedAnswers}) {

    function isSelected(answer) {
        return selectedAnswers.find(selectedAnswer => answer.option === selectedAnswer.option)
    }

    function handleSelectAnswer(answer) {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentIndex] = answer;
        setSelectedAnswers(newSelectedAnswers);
        nextQuestion()
    }

    return <div className={styles["quiz-card"]}>
        <h4 className={styles["quiz-card-question"]}>{currentIndex + 1}. {question.question}</h4>
        <ul className={styles["quiz-card-container"]}>
            {question.answers.map((answer) => {
                return <li key={answer.option}>
                    <Button
                        className={isSelected(answer) ? styles["quiz-answer-selected-button"] : styles["quiz-answer-button"]}
                        onClick={() => handleSelectAnswer(answer)}>
                        {answer.option}
                    </Button>
                </li>;
            })}
        </ul>
    </div>
}

export default QuizCard;