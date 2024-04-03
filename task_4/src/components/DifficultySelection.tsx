import { Difficulty, difficultyType } from '../App';
import DifficultyButton from './UI/ChangeDifficultyButton';

type DifficultySelectionProps = {
  currentDifficulty: difficultyType;
  changeDifficulty: (difficulty: difficultyType) => void;
};

export default function DifficultySelection({
  currentDifficulty,
  changeDifficulty,
}: DifficultySelectionProps) {
  return (
    <div>
      <p className="mb-2 text-center font-semibold underline">Difficulty:</p>
      <div className="flex flex-col gap-2 px-12">
        <DifficultyButton
          difficulty={Difficulty.Easy}
          currentDifficulty={currentDifficulty}
          changeDifficulty={() => changeDifficulty('easy')}
          color="yellow"
        />
        <DifficultyButton
          difficulty={Difficulty.Medium}
          currentDifficulty={currentDifficulty}
          changeDifficulty={() => changeDifficulty('medium')}
          color="orange"
        />
        <DifficultyButton
          difficulty={Difficulty.Hard}
          currentDifficulty={currentDifficulty}
          changeDifficulty={() => changeDifficulty('hard')}
          color="red"
        />
        <DifficultyButton
          difficulty={Difficulty.Random}
          currentDifficulty={currentDifficulty}
          changeDifficulty={() => changeDifficulty('')}
          color="gray"
        />
      </div>
    </div>
  );
}
