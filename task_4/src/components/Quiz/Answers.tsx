import Answer from './Answer';

export type AnswersProps = {
  answers: { answer: string; isCorrect: boolean }[];
  answerSelected: boolean;
  setAnswerSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<number>>;
};

export default function Answers({
  answers,
  answerSelected,
  setAnswerSelected,
  setResult,
}: AnswersProps) {
  return (
    <div className="m-4 flex flex-col gap-2">
      {answers?.map((el, index) => {
        return (
          <Answer
            key={index}
            answer={el.answer}
            isCorrect={el.isCorrect}
            answerSelected={answerSelected}
            setAnswerSelected={setAnswerSelected}
            setResult={setResult}
          />
        );
      })}
    </div>
  );
}
