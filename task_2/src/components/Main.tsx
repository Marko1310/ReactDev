import { useState } from 'react';
import Team from './Team';
import Score from './Score';
import CurrentDate from './CurrentDate';
import TeamStats from './TeamStats';
import Timer from './Timer';
import Goals from './Goals';
import { team1, team2 } from '../data/teams';
import {
  ChangeKeysType,
  ScoreType,
  TeamKeysType,
  TeamStatsType,
} from '../types/dataTypes';

function Main() {
  const [team1Stats, setTeam1Stats] = useState<TeamStatsType>({
    shots: 0,
    fouls: 0,
    yellowCards: 0,
    redCards: 0,
  });
  const [team2Stats, setTeam2Stats] = useState<TeamStatsType>({
    shots: 0,
    fouls: 0,
    yellowCards: 0,
    redCards: 0,
  });
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTimer = () => {
    setSeconds(seconds + 1);
    if (seconds === 59) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  };
  setTimeout(updateTimer, 1000);

  const [scoreData, setScoreData] = useState<ScoreType[]>([]);

  const handleScoreChange = function (
    change: ChangeKeysType,
    team?: TeamKeysType,
  ) {
    if (change === 'decrease') {
      if (scoreData.length === 0) return;
      setScoreData((prevStats) => prevStats.slice(0, -1));
    } else if (
      change === 'increase' &&
      (team === 'team1' || team === 'team2')
    ) {
      const lastEvent = scoreData[scoreData.length - 1];
      const currentTeam1Score = lastEvent?.team1Score || 0;
      const currentTeam2Score = lastEvent?.team2Score || 0;

      const newEvent = {
        team1Score:
          team === 'team1' ? currentTeam1Score + 1 : currentTeam1Score,
        team2Score:
          team === 'team2' ? currentTeam2Score + 1 : currentTeam2Score,
        minute: minutes,
      };
      setScoreData((prevStats) => {
        return [...prevStats, newEvent];
      });
    }
  };

  const updateTeamStats = function (
    prevStats: TeamStatsType,
    fieldName: keyof TeamStatsType,
    change: ChangeKeysType,
  ) {
    return {
      ...prevStats,
      [fieldName]:
        change === 'increase'
          ? prevStats[fieldName] + 1
          : Math.max(prevStats[fieldName] - 1, 0),
    };
  };

  const handleChangeTeamStats = function (
    team: TeamKeysType,
    fieldName: keyof TeamStatsType,
    change: ChangeKeysType,
  ) {
    switch (team) {
      case 'team1':
        setTeam1Stats((prevStats) =>
          updateTeamStats(prevStats, fieldName, change),
        );
        break;

      case 'team2':
        setTeam2Stats((prevStats) =>
          updateTeamStats(prevStats, fieldName, change),
        );
        break;
      default:
        return;
    }
  };

  const resetState = function () {
    setTeam1Stats((prevStats) => ({
      ...prevStats,
      score: 0,
      shots: 0,
      fouls: 0,
      yellowCards: 0,
      redCards: 0,
    }));
    setTeam2Stats((prevStats) => ({
      ...prevStats,
      score: 0,
      shots: 0,
      fouls: 0,
      yellowCards: 0,
      redCards: 0,
    }));
    setScoreData([]);
  };

  return (
    <div className="m-0 rounded-3xl border-2 border-blue-300 bg-slate-50 lg:m-4">
      <div className="flex flex-col">
        <div className="p-2 lg:p-12">
          <CurrentDate />
          <Timer minutes={minutes} seconds={seconds} />
          <div className="r flex justify-between gap-4">
            <Team teamName={team1.name} crest={team1.crest} />
            <Score
              team1Score={scoreData.slice(-1)[0]?.team1Score || 0}
              team2Score={scoreData.slice(-1)[0]?.team2Score || 0}
              updateScore={handleScoreChange}
              resetState={resetState}
            />
            <Team teamName={team2.name} crest={team2.crest} />
          </div>
        </div>
        <Goals scoreData={scoreData} />
        <TeamStats
          team1Stats={team1Stats}
          team2Stats={team2Stats}
          handleChangeTeamStats={handleChangeTeamStats}
        />
      </div>
    </div>
  );
}

export default Main;
