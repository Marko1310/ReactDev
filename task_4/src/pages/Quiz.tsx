import Question from '../components/Quiz/Question';
import Answers from '../components/Quiz/Answers';
import QuizHeader from '../components/Quiz/QuizHeader';
import QuestionCounter from '../components/Quiz/QuestionCounter';
import Result from '../components/Quiz/Result';
import { useEffect, useState } from 'react';

export type QuizProps = {
  questionsAndAnswers: {
    question: string;
    shuffledAnswers: {
      answer: string;
      isCorrect: boolean;
    }[];
  }[];
  currentQuestion: number;
  totalNumberOfQuestions: number;
  handleNextQuestion: () => void;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

export default function Quiz({
  questionsAndAnswers,
  currentQuestion,
  totalNumberOfQuestions,
  handleNextQuestion,
  result,
  setResult,
}: QuizProps) {
  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    setAnswerSelected(false);
  }, [currentQuestion]);

  return (
    <div>
      <QuizHeader>
        <QuestionCounter
          currentQuestion={currentQuestion + 1}
          totalQuestions={totalNumberOfQuestions}
        />
        <Result result={result} />
      </QuizHeader>
      <Question question={questionsAndAnswers[currentQuestion]?.question} />
      <Answers
        answers={questionsAndAnswers[currentQuestion]?.shuffledAnswers}
        answerSelected={answerSelected}
        setAnswerSelected={setAnswerSelected}
        setResult={setResult}
      />
      <div className="mt-10 w-full text-end">
        <button
          className={`${!answerSelected ? 'bg-gray-300' : 'bg-blue-400'} rounded-md  px-4 py-2 text-white`}
          disabled={!answerSelected}
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
