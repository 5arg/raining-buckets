export type SeasonType = {
  year: string;
  teams: {
    _id: false;
    team: string;
    gamesPlayed: number;
    fgPct: number;
    fg3Pct: number;
    ftPct: number;
    rebounds: number;
    assists: number;
    steals: number;
    blocks: number;
    turnovers: number;
    points: number;
  }[];
};

export type SeasonAveragesType = {
  _id: number;
  seasons: SeasonType[];
};
