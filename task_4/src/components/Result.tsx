type ResultProps = {
  result: number;
};

export default function Result({ result }: ResultProps) {
  return (
    <div className="text-lg font-semibold text-blue-500">Result: {result}</div>
  );
}
