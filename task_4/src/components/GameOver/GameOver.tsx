type GameOverProps = {
  result: number;
  resetGame: () => void;
};

export default function GameOver({ result, resetGame }: GameOverProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-xl font-bold">Your Final Result: {result}</p>
      <button
        onClick={resetGame}
        className="rounded-md bg-blue-400 px-4 py-2 text-white"
      >
        Try Again
      </button>
    </div>
  );
}
