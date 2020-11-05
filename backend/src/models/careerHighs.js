const mongoose = require("mongoose");

const careerHighsSschema = new mongoose.Schema({
  _id: { type: Number },
  points: [
    {
      _id: false,
      value: { type: Number },
      gameId: { type: String },
      gameDate: { type: String },
      vsTeam: { type: String },
      vsTeamId: {
        type: Number,
      },
    },
  ],
  rebounds: [
    {
      _id: false,
      value: { type: Number },
      gameId: { type: String },
      gameDate: { type: String },
      vsTeam: { type: String },
      vsTeamId: {
        type: Number,
      },
    },
  ],
  assists: [
    {
      _id: false,
      value: { type: Number },
      gameId: { type: String },
      gameDate: { type: String },
      vsTeam: { type: String },
      vsTeamId: {
        type: Number,
      },
    },
  ],
  blocks: [
    {
      _id: false,
      value: { type: Number },
      gameId: { type: String },
      gameDate: { type: String },
      vsTeam: { type: String },
      vsTeamId: {
        type: Number,
      },
    },
  ],
  steals: [
    {
      _id: false,
      value: { type: Number },
      gameId: { type: String },
      gameDate: { type: String },
      vsTeam: { type: String },
      vsTeamId: {
        type: Number,
      },
    },
  ],
});

const CareerHighs = mongoose.model("CareerHighs", careerHighsSschema);

module.exports = CareerHighs;
