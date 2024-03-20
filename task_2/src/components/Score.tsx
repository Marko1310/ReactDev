import ChangeButton from './ChangeButton';
import { TeamStatsType } from './Main';

type ScoreProps = {
  team1Score: number;
  team2Score: number;
  updateScore: (
    value: 'increment' | 'decrement',
    team?: 'team1' | 'team2',
  ) => void;
  resetState: () => void;
};

function Score({
  team1Score,
  team2Score,
  updateScore,
  resetState,
}: ScoreProps) {
  return (
    <div className="h-auto w-32 lg:w-64">
      <div className="mb-8 flex w-full justify-center">
        <div className="flex flex-col">
          <p className="text-6xl lg:text-8xl">{team1Score}</p>
        </div>
        <p className="px-4 text-6xl lg:text-8xl">:</p>
        <div className="flex flex-col">
          <p className="text-6xl lg:text-8xl">{team2Score}</p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex gap-1 lg:gap-2">
          <ChangeButton
            value="+"
            onClick={() => updateScore('increment', 'team1')}
          />
          <ChangeButton
            value="Undo Score"
            onClick={() => updateScore('decrement')}
          />
          <ChangeButton
            value="+"
            onClick={() => updateScore('increment', 'team2')}
          />
        </div>
      </div>
      <div className="mt-3 w-full text-center">
        <button
          onClick={resetState}
          className="rounded-lg border bg-white px-4 py-2"
        >
          Reset Statistics
        </button>
      </div>
    </div>
  );
}

export default Score;
