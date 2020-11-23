export type CareerHighsType = {
  [key: string]: {
    value: number;
    gameId: string;
    gameDate: string;
    vsTeamId: number;
  }[];
  points: {
    value: number;
    gameId: string;
    gameDate: string;
    vsTeam: string;
    vsTeamId: number;
  }[];
  rebounds: {
    value: number;
    gameId: string;
    gameDate: string;
    vsTeam: string;
    vsTeamId: number;
  }[];
  assists: {
    value: number;
    gameId: string;
    gameDate: string;
    vsTeam: string;
    vsTeamId: number;
  }[];
  blocks: {
    value: number;
    gameId: string;
    gameDate: string;
    vsTeam: string;
    vsTeamId: number;
  }[];
  steals: {
    value: number;
    gameId: string;
    gameDate: string;
    vsTeam: string;
    vsTeamId: number;
  }[];
};
