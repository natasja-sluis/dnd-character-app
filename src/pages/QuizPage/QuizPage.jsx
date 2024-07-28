import {useState} from "react";
import {quizData} from "/src/data/quizData.js"
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";
import Button from "../../components/Button/Button.jsx";
import QuizResults from "../../components/QuizResults/QuizResults.jsx";
import styles from "./QuizPage.module.css";


function QuizPage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showResult, toggleShowResult] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const currentQuestion = quizData.questions[currentIndex];
    const currentOptions = quizData.questions[currentIndex].answers.map((answer) => answer.option);

    const answerIsSelected = () => {
        currentOptions.map((currentOption) => {
            return currentOption === selectedAnswers;
        })
    }

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
                    answerIsSelected={answerIsSelected}
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