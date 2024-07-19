import styles from "./QuizPage.module.css";
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";

function QuizPage() {
    return <div className={styles["quiz-card-container"]}>
        <InAppNavigation
        />
        <QuizCard
            question="Question 1"
            number="1"
            numbertotal="8"
            answer1="answer 1"
            answer2="answer 2"
            answer3="answer 3"
            answer4="answer 4"
            answer5="answer 5"
        />
    </div>
}

export default QuizPage;