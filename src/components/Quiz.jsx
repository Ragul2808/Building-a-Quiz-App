import { useState } from "react";
import QUESTIONS from '../questions.js'
export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;

    function handleSelectAnswer(selectedAnswer){
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

    }
    return <div id="question">
        <h1>{QUESTIONS [activeQuestionIndex].text}</h1>
        <ul id="answer">
            {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
                <li key={answer} className="answer">
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>

                </li>
            ))}
        </ul>
    </div>
}