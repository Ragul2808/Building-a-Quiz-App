import { useRef } from "react";

export default function Answer({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef(null);

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = '';
        if (answer === selectedAnswer) {
          cssClass = 'selected';
        }
        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass} disabled={answerState !== ""} 
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
