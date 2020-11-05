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

router.get("/players/:id", async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await Player.findOne({ _id: playerId });

    if (!player) {
      return res.status(404).send();
    }

    res.send(player);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/players/careerhighs/:id", async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await CareerHighs.findOne({ _id: playerId });

    if (!player) {
      return res.status(404).send();
    }

    res.send(player);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/players/careertotal/:id", async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await CareerTotal.findOne({ _id: playerId });

    if (!player) {
      return res.status(404).send();
    }

    res.send(player);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/players/seasontotals/:id", async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await SeasonTotals.findOne({ _id: playerId });

    if (!player) {
      return res.status(404).send();
    }

    res.send(player);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
