export type SeasonAveragesType = {
  _id: number;
  seasons: {
    _id: false;
    year: string;
    teams: {
      _id: false;
      team: { type: String };
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
  }[];
};
