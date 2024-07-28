import {useNavigate} from "react-router-dom";
import ClassTile from "../ClassTile/ClassTile.jsx";
import Button from "../Button/Button.jsx";
import styles from "./QuizResults.module.css";


function QuizResults({selectedAnswers, scoreOrder, resetQuiz}) {

    const navigate = useNavigate();
    const totalScores = [];

    for (let i = 0; i < selectedAnswers.length; i++) {
        const scores = selectedAnswers[i].scores;
        for (let j = 0; j < scores.length; j++) {
            totalScores[j] = (totalScores[j] || 0) + scores[j];
        }
    }

    const indexOfHighestScore = totalScores.indexOf(Math.max(...totalScores));

    return <div className={styles["result-card"]}>
        <h3>Your result...</h3>
        <ClassTile
            characterName={scoreOrder[indexOfHighestScore]}
            slug={scoreOrder[indexOfHighestScore]}
        />
        <Button
            type="button"
            onClick={() => resetQuiz()}
        >
            Reset
        </Button>
        <Button
            type="button"
            onClick={() => navigate("/overview")}
        >
            See all classes
        </Button>
    </div>
}

export default QuizResults;