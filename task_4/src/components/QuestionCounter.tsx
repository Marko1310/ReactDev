type QuestionCounterProps = {
  currentQuestion: number;
  totalQuestions: number;
};

export default function QuestionCounter({
  currentQuestion,
  totalQuestions,
}: QuestionCounterProps) {
  return (
    <p className="p-4 text-end font-thin">
      Question {currentQuestion} of {totalQuestions}
    </p>
  );
}
