import ChangeButton from './ChangeButton';
import { TeamStatsType } from './Main';

type ScoreProps = {
  fieldName: keyof TeamStatsType;
  team1Score: number;
  team2Score: number;
  updateScore: (
    team: 'team1' | 'team2',
    fieldName: keyof TeamStatsType,
    updateScore: 'increment' | 'decrement',
  ) => void;
  resetState: () => void;
};

function Score({
  fieldName,
  team1Score,
  team2Score,
  updateScore,
  resetState,
}: ScoreProps) {
  return (
    <div className="h-auto w-32 lg:w-52">
      <div className="mb-8 flex w-full justify-center">
        <div className="flex flex-col">
          <p className="text-6xl lg:text-8xl">{team1Score}</p>
        </div>
        <p className="px-4 text-6xl lg:text-8xl">:</p>
        <div className="flex flex-col">
          <p className="text-6xl lg:text-8xl">{team2Score}</p>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-1 lg:gap-2">
          <ChangeButton
            type="+"
            onClick={() => updateScore('team1', fieldName, 'increment')}
          />
          <ChangeButton
            type="-"
            onClick={() => updateScore('team1', fieldName, 'decrement')}
          />
        </div>
        <div className="flex gap-1 lg:gap-2">
          <ChangeButton
            type="+"
            onClick={() => updateScore('team2', fieldName, 'increment')}
          />
          <ChangeButton
            type="-"
            onClick={() => updateScore('team2', fieldName, 'decrement')}
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
