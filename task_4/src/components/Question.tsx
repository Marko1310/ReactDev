type QuestionProps = {
  question: string;
};

export default function Question({ question }: QuestionProps) {
  return <p className="mb-6 ml-2 text-lg font-semibold">{question}</p>;
}
