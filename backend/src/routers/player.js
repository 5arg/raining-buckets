const express = require("express");
const Player = require("../models/player");
const CareerHighs = require("../models/careerHighs");
const CareerTotal = require("../models/careerTotal");
const SeasonTotals = require("../models/seasonTotals");

const router = new express.Router();

router.get("/players", async (req, res) => {
  try {
    const players = await Player.find();
    res.send(players);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
