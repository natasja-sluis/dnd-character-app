import styles from "./QuizPage.module.css";
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";
import Button from "../../components/Button/Button.jsx";


function QuizPage() {
    return <div className={styles["quiz-card-container"]}>
        <div>
            <InAppNavigation
            />
            <p>1 of 8</p>
        </div>
        <QuizCard
            question="Question 1"
            answer1="answer 1"
            answer2="answer 2"
            answer3="answer 3"
            answer4="answer 4"
            answer5="answer 5"
        />
        <Button
            type="button"
            text="next"
        />
    </div>
}

export default QuizPage;