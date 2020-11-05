const mongoose = require("mongoose");

const seasonTotalsSchema = new mongoose.Schema({
  _id: { type: Number },
  seasons: [
    {
      _id: false,
      year: {
        type: { String },
      },
      teams: [
        {
          _id: false,
          team: { type: String },
          gamesPlayed: { type: Number },
          fgPct: { type: Number },
          fg3Pct: { type: Number },
          ftPct: { type: Number },
          rebounds: { type: Number },
          assists: { type: Number },
          steals: { type: Number },
          blocks: { type: Number },
          turnovers: { type: Number },
          points: { type: Number },
        },
      ],
    },
  ],
});

const SeasonTotals = mongoose.model("SeasonTotals", seasonTotalsSchema);

module.exports = SeasonTotals;
