import {useState} from "react";
import QuizCard from "../../components/QuizCard/QuizCard.jsx";
import InAppNavigation from "../../components/InAppNavigation/InAppNavigation.jsx";
import {questions} from "/src/data/questions.js"
import styles from "./QuizPage.module.css";

function QuizPage() {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(questions[index]);
    const [result, toggleResult] = useState(false);
    console.log(index);

    const nextQuestion = () => {
        if (index !== questions.length - 1) {
            setIndex(++index);
            setQuestion(questions[index]);
        } else {
            toggleResult(true);
        }
    }

    const resetQuiz = () => {
        toggleResult(false);
        setIndex(0);
        setQuestion(questions[index]);
    }


    return <div className={styles["quiz-card-container"]}>
        {result ?  <>
        <h3>End of Quiz</h3>
        <button
        type="button"
        onClick={resetQuiz}
        >
            Reset
        </button>
        </> : <>
            <div className={styles["question-navigation-container"]}>
                <InAppNavigation
                />
                <p>{index + 1} of {questions.length}</p>
            </div>

            <QuizCard
                number={index + 1}
                question={question.question}
                option1={question.option1}
                option2={question.option2}
                option3={question.option3}
                option4={question.option4}
                option5={question.option5}
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