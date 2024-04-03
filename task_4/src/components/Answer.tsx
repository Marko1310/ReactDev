import { useEffect, useState } from 'react';

type AnswerProps = {
  answer: string;
  isCorrect: boolean;
  answerSelected: boolean;
  setAnswerSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

export default function Answer({
  answer,
  isCorrect,
  answerSelected,
  setAnswerSelected,
  setResult,
}: AnswerProps) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(false);
  }, [answer]);

  const handleSelect = () => {
    setAnswerSelected(true);
    setSelected(true);
    setResult((prevResult) => {
      return isCorrect ? prevResult + 1 : prevResult;
    });
  };

  return (
    <button
      onClick={handleSelect}
      disabled={answerSelected}
      className={`
      rounded-md border p-4 
      ${answerSelected && isCorrect && 'bg-green-300'}
      ${selected && !isCorrect && 'bg-red-300'}
      hover:${answerSelected ? 'bg-inherit' : 'bg-gray-300'}
      hover:${answerSelected ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {answer}
    </button>
  );
}
