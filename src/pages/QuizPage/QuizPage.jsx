import {useState} from "react";
import {quizData} from "/src/data/quizData.js"
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";
import QuizResults from "../../components/QuizResults/QuizResults.jsx";
import styles from "./QuizPage.module.css";
import {ArrowLeft, ArrowRight} from "@phosphor-icons/react";


function QuizPage() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const currentQuestion = quizData.questions[currentIndex];
    const isDisabled = selectedAnswers.length < currentIndex + 1;

    const nextQuestion = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const showResult = currentIndex >= quizData.questions.length;

    function handlePreviousQuestion() {
        currentIndex !== 0 &&
        setCurrentIndex(currentIndex - 1);
    }

    const resetQuiz = () => {
        setCurrentIndex(0);
        setSelectedAnswers([]);
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
                    >
                        <ArrowLeft size={56}/>

                    </InAppNavigation>
                    <p>{currentIndex + 1} of {quizData.questions.length}</p>
                    <InAppNavigation
                        onClick={() => {
                            if (!isDisabled) {
                                nextQuestion()
                            }
                        }}
                        disabled={isDisabled}
                    >
                        <ArrowRight
                            fill={isDisabled ? 'var(--secondary-color)' : 'var(--accent-color)'}
                            size={56}
                            className={isDisabled ? styles["disabled-icon"] : " "}
                        />
                    </InAppNavigation>
                </div>


                <QuizCard
                    currentIndex={currentIndex}
                    question={currentQuestion}
                    nextQuestion={nextQuestion}
                    setSelectedAnswers={setSelectedAnswers}
                    selectedAnswers={selectedAnswers}
                    setCurrentIndex={setCurrentIndex}
                />
            </>
        }
    </div>
}

export default QuizPage;