import { useState } from 'react';
import Team from './Team';
import Score from './Score';
import CurrentDate from './CurrentDate';
import TeamStats from './TeamStats';
import Timer from './Timer';
import { team1, team2 } from '../data/teams';
import Goals from './Goals';

export type TeamStatsType = {
  shots: number;
  fouls: number;
  yellowCards: number;
  redCards: number;
};

export type ScoreType = {
  team1Score: number;
  team2Score: number;
  minute: number;
};

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
    value: 'increment' | 'decrement',
    team?: 'team1' | 'team2',
  ) {
    if (value === 'decrement') {
      if (scoreData.length === 0) return;
      scoreData.pop();
    }
    if (value === 'increment' && team === 'team1') {
      setScoreData((prevStats) => {
        const lastEvent = prevStats[prevStats.length - 1];
        const newEvent = {
          team1Score: lastEvent?.team1Score ? lastEvent.team1Score + 1 : 1,
          team2Score: lastEvent?.team2Score ? lastEvent.team2Score : 0,
          minute: minutes,
        };
        return [...prevStats, newEvent];
      });
    }
    if (value === 'increment' && team === 'team2') {
      setScoreData((prevStats) => {
        const lastEvent = prevStats[prevStats.length - 1];
        const newEvent = {
          team1Score: lastEvent?.team1Score ? lastEvent.team1Score : 0,
          team2Score: lastEvent?.team2Score ? lastEvent?.team2Score + 1 : 1,
          minute: minutes,
        };
        return [...prevStats, newEvent];
      });
    }
  };

  const handleChangeTeamStats = function (
    team: 'team1' | 'team2',
    fieldName: keyof TeamStatsType,
    change: 'increment' | 'decrement',
  ) {
    switch (team) {
      case 'team1':
        setTeam1Stats((prevStats) => ({
          ...prevStats,
          [fieldName]:
            change === 'increment'
              ? prevStats[fieldName] + 1
              : Math.max(prevStats[fieldName] - 1, 0),
        }));
        break;

      case 'team2':
        setTeam2Stats((prevStats) => ({
          ...prevStats,
          [fieldName]:
            change === 'increment'
              ? prevStats[fieldName] + 1
              : Math.max(prevStats[fieldName] - 1, 0),
        }));
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
