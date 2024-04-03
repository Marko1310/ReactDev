import he from 'he';
import { QuestionDataType } from '../types/applicationTypes';

function shuffleArray(array: { answer: string; isCorrect: boolean }[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffleAnswers = (
  correctAnswer: string,
  incorrectAnswers: string[],
): { answer: string; isCorrect: boolean }[] => {
  if (!incorrectAnswers || !correctAnswer) return [];

  const allAnswers = [
    ...incorrectAnswers.map((answer) => ({
      answer: he.decode(answer),
      isCorrect: false,
    })),
    { answer: he.decode(correctAnswer), isCorrect: true },
  ];

  return shuffleArray(allAnswers);
};

export const filterData = (dataArray: QuestionDataType[]) => {
  return dataArray.map((data) => {
    return {
      question: he.decode(data.question),
      shuffledAnswers: shuffleAnswers(
        data.correct_answer,
        data.incorrect_answers,
      ),
    };
  });
};
