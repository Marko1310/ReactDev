import { difficultyType } from '../../App';

type DifficultyButtonProps = {
  difficulty: difficultyType;
  currentDifficulty: difficultyType;

  changeDifficulty: (difficulty: difficultyType) => void;
  color: 'yellow' | 'orange' | 'red' | 'gray';
};

export default function DifficultyButton({
  difficulty,
  currentDifficulty,
  changeDifficulty,
  color,
}: DifficultyButtonProps) {
  return (
    <button
      onClick={() => changeDifficulty('easy')}
      className={`rounded-md border p-2 px-8 transition-all hover:bg-${color}-300 ${currentDifficulty === difficulty ? 'bg-green-300' : 'bg-white'} `}
    >
      {difficulty === ''
        ? 'Random'
        : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </button>
  );
}
