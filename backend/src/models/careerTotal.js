const mongoose = require("mongoose");

const careerTotalSchema = new mongoose.Schema({
  _id: { type: Number },
  gamesPlayed: { type: Number },
  points: { type: Number },
  rebounds: { type: Number },
  assists: { type: Number },
  steals: { type: Number },
  blocks: { type: Number },
  turnovers: { type: Number },
  fgPct: { type: Number },
  fg3Pct: { type: Number },
  ftPct: { type: Number },
});

const CareerTotal = mongoose.model("CareerTotal", careerTotalSchema);

module.exports = CareerTotal;
