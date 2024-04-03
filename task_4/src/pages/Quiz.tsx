import { useEffect, useState } from 'react';
import Question from '../components/Question';
import Answers from '../components/Answers';
import QuizHeader from '../components/QuizHeader';
import QuestionCounter from '../components/QuestionCounter';
import Result from '../components/Result';

export type QuestionDataType = {
  questionData: {
    question: string;
    shuffledAnswers: {
      answer: string;
      isCorrect: boolean;
    }[];
  }[];
  currentQuestion: number;
  handleNext: () => void;
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

export default function Quiz({
  questionData,
  currentQuestion,
  handleNext,
  result,
  setResult,
}: QuestionDataType) {
  const totalNumberOfQuestions = questionData.length;
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
      <Question question={questionData[currentQuestion]?.question} />
      <Answers
        answers={questionData[currentQuestion]?.shuffledAnswers}
        answerSelected={answerSelected}
        setAnswerSelected={setAnswerSelected}
        setResult={setResult}
      />
      <div className="mt-10 w-full text-end">
        <button
          className={`${!answerSelected ? 'bg-gray-300' : 'bg-blue-400'} rounded-md  px-4 py-2 text-white`}
          disabled={!answerSelected}
          onClick={handleNext}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
