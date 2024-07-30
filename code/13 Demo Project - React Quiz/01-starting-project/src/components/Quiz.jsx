import {useState, useCallback} from "react";
import QUESTIONS from '../../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {

  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // console.log(`length: ${userAnswers.length} QUESTIONS:${QUESTIONS.length}`);
  return (
    userAnswers.length !== QUESTIONS.length ? (
        <div id='quiz'>
          <div id='question'>
            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'>
              {shuffleArray([...QUESTIONS[activeQuestionIndex].answers]).map((answer) => {
                return (
                  <li key={answer} className='answer'>
                    <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                  </li>)
              })}
            </ul>
          </div>
        </div>
      ) :
      <div id='summary'>
        <h2>Summary</h2>
        <img src={quizCompleteImg} alt='quiz complete'/>
      </div>
  );
}