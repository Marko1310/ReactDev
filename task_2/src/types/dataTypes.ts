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

const Teams = {
  Team1: 'team1',
  Team2: 'team2',
} as const;

export type TeamKeysType = (typeof Teams)[keyof typeof Teams];

const Change = {
  Increase: 'increase',
  Decrease: 'decrease',
} as const;

export type ChangeKeysType = (typeof Change)[keyof typeof Change];
