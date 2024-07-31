import {useState, useCallback} from "react";
import QUESTIONS from '../../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";
import Summary from "./Summary.jsx";

function shuffleAnswers(QUESTIONS) {
	return QUESTIONS.map((question) => {
		const answers = [...question.answers];
		answers.sort(() => Math.random() - 0.5);
		return {
			...question,
			answers,
		};
	});
}
let content;

const shuffledAnswers = shuffleAnswers(QUESTIONS);

export default function Quiz() {

	const [answerState, setAnswerState] = useState('');
	const [userAnswers, setUserAnswers] = useState([]);
	const [isTimerRunning, setIsTimerRunning] = useState(true);
	const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
		setAnswerState('answered');
		setIsTimerRunning(false);
		setUserAnswers((prevUserAnswers) => {
			return [...prevUserAnswers, selectedAnswer];
		});

		setTimeout(() => {
			if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
				setAnswerState('correct');
			} else {
				setAnswerState('wrong');
			}

			setTimeout(() => {
				setAnswerState('');
				setIsTimerRunning(true);
			}, 2000);

		}, 1000);
	}, [activeQuestionIndex]);

	const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

	if (activeQuestionIndex < QUESTIONS.length) {
		content = (
			<div id='quiz'>
				<div id='question'>
					<QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}
												 isRunning={isTimerRunning}/>
					<h2>{QUESTIONS[activeQuestionIndex].text}</h2>
					<ul id='answers'>
						{shuffledAnswers[activeQuestionIndex].answers.map((answer) => {
							let cssClasses = '';
							const isSelected = userAnswers[activeQuestionIndex] === answer;
							if (answerState === 'answered' && isSelected) {
								cssClasses = 'selected';
							}
							if (isSelected) {
								if (answerState === 'correct') {
									cssClasses = 'correct';
								} else if (answerState === 'wrong') {
									cssClasses = 'wrong';
								}
							}
							return (
								<li key={answer} className='answer'>
									<button onClick={() => handleSelectAnswer(answer)} className={cssClasses}
													disabled={answerState !== ''}>{answer}</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	} else {
		content = <Summary userAnswers={userAnswers}/>;
	}

	return (content);
}

