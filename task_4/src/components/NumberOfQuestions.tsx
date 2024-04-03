type NumberOfQuestions = {
  amount: number;
  changeAmount: (change: 'increase' | 'decrease') => void;
};

export default function NumberOfQuestions({
  amount,
  changeAmount,
}: NumberOfQuestions) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-center font-semibold underline">
        Number of questions:
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          className="rounded-md border px-4 py-2"
          onClick={() => changeAmount('decrease')}
        >
          -
        </button>
        <p className="text-2xl">{amount}</p>
        <button
          className="rounded-md border px-4 py-2"
          onClick={() => changeAmount('increase')}
        >
          +
        </button>
      </div>
    </div>
  );
}
