const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  _id: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  teamAbbreviation: { type: String },
  teamId: { type: Number },
  birthdate: { type: String },
  height: { type: String },
  weight: { type: String },
  position: { type: String },
  jerseyNumber: { type: String },
  profilePicture: { type: { Buffer } },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
