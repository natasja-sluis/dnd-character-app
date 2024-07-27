import {useState} from "react";
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";
import {questions} from "/src/data/questions.js"
import styles from "./QuizPage.module.css";
import ClassTile from "../../components/ClassTile/ClassTile.jsx";

function QuizPage() {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(questions.questions[index]);
    const [result, toggleResult] = useState(false);

    const nextQuestion = () => {
        if (index !== questions.questions.length - 1) {
            setIndex(++index);
            setQuestion(questions.questions[index]);
        } else {
            toggleResult(true);
        }
    }

    function handlePreviousQuestion() {
        index !== 0 &&
            setIndex(--index);
            setQuestion(questions.questions[index]);
    }

    const resetQuiz = () => {
        toggleResult(false);
        setIndex(0);
        setQuestion(questions.questions[index]);
    }

    return <div className={styles["quiz-card-container"]}>
        {result ? <div className={styles["result-card"]}>
                <h3>Your result...</h3>
                <ClassTile
                    characterName="warlock"
                    slug="warlock"
                />
                <button
                    type="button"
                    onClick={resetQuiz}
                >
                    Reset
                </button>
            </div>
            : <>
                <div className={styles["question-navigation-container"]}>
                    <InAppNavigation
                        onClick={handlePreviousQuestion}
                        navigate={index === 0 && "/"}
                />
                <p>{index + 1} of {questions.questions.length}</p>
            </div>

            <QuizCard
                number={index + 1}
                question={question.question}
                option={question.answers.map((answer) => answer.option)}
            />
            <button
                type="button"
                onClick={nextQuestion}
            >
                Next
            </button>
        </>
        }

    </div>
}

export default QuizPage;