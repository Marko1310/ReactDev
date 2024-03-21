import { ScoreType } from '../types/dataTypes';

function Goals({ scoreData }: { scoreData: ScoreType[] }) {
  return (
    <div className="mb-4 flex flex-col items-center">
      <h3>Goals: </h3>
      {scoreData.map((el, index) => {
        return (
          <div key={index} className="flex items-center gap-4">
            <p className="text-lg font-semibold">{`⚽️ ${el.team1Score} : ${el.team2Score}`}</p>
            <p>{`${el.minute + 1}' min`}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Goals;
