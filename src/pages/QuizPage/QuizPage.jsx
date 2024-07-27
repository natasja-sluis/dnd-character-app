import {useState} from "react";
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";
import {quizData} from "/src/data/questions.js"
import styles from "./QuizPage.module.css";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";
import Button from "../../components/Button/Button.jsx";
import QuizResults from "../../components/QuizResults/QuizResults.jsx";

function QuizPage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, toggleShowResult] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const currentQuestion = quizData.questions[currentIndex];

    console.log(selectedAnswers);

    const nextQuestion = () => {
        if (currentIndex !== quizData.questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            toggleShowResult(true);
        }
    }

    function handlePreviousQuestion() {
        currentIndex !== 0 &&
        setCurrentIndex(currentIndex - 1);
    }

    const resetQuiz = () => {
        toggleShowResult(false);
        setCurrentIndex(0);
    }

    return <div className={styles["quiz-card-container"]}>
        {showResult ? <QuizResults
            selectedAnswers={selectedAnswers}
            scoreOrder={quizData.scoreOrder}
            resetQuiz={resetQuiz}
            />
            : <>
                <div className={styles["question-navigation-container"]}>
                    <InAppNavigation
                        onClick={handlePreviousQuestion}
                        navigate={currentIndex === 0 && "/"}
                    />
                    <p>{currentIndex + 1} of {quizData.questions.length}</p>
                </div>

                <QuizCard
                    currentIndex={currentIndex}
                    question={currentQuestion}
                    setSelectedAnswers={setSelectedAnswers}
                    selectedAnswers={selectedAnswers}
                />

                <Button
                    type="button"
                    onClick={nextQuestion}
                >
                    Next
                </Button>
            </>
        }

    </div>
}

export default QuizPage;