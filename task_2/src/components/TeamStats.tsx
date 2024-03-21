import {
  ChangeKeysType,
  TeamKeysType,
  TeamStatsType,
} from '../types/dataTypes';
import StatRow from './StatRow';

type TeamStatsProps = {
  team1Stats: TeamStatsType;
  team2Stats: TeamStatsType;
  handleChangeTeamStats: (
    team: TeamKeysType,
    fieldName: keyof TeamStatsType,
    change: ChangeKeysType,
  ) => void;
};

function TeamStats({
  team1Stats,
  team2Stats,
  handleChangeTeamStats,
}: TeamStatsProps) {
  return (
    <div className="mt-2 w-full rounded-b-3xl bg-slate-100 px-4 py-4 lg:px-16">
      <h2 className="mb-6 flex justify-center text-lg font-bold underline ">
        Team Stats
      </h2>
      <table className="w-full">
        <tbody>
          <StatRow
            title="Shots"
            fieldName="shots"
            team1Data={team1Stats.shots}
            team2Data={team2Stats.shots}
            callbackFn={handleChangeTeamStats}
          />
          <StatRow
            title="Fouls"
            fieldName="fouls"
            team1Data={team1Stats.fouls}
            team2Data={team2Stats.fouls}
            callbackFn={handleChangeTeamStats}
          />
          <StatRow
            title="Yellow Cards"
            fieldName="yellowCards"
            team1Data={team1Stats.yellowCards}
            team2Data={team2Stats.yellowCards}
            callbackFn={handleChangeTeamStats}
          />
          <StatRow
            title="Red Cards"
            fieldName="redCards"
            team1Data={team1Stats.redCards}
            team2Data={team2Stats.redCards}
            callbackFn={handleChangeTeamStats}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TeamStats;
