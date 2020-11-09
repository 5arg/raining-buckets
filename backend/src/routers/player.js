const express = require("express");
const Player = require("../models/player");
const CareerHighs = require("../models/careerHighs");
const CareerTotal = require("../models/careerTotal");
const SeasonTotals = require("../models/seasonTotals");

const router = new express.Router();

router.get("/players", async (req, res) => {
  const playersPerPage = 20;
  let options = [
    {
      $project: {
        name: { $concat: ["$firstName", " ", "$lastName"] },
        firstName: "$firstName",
        lastName: "$lastName",
        profilePicture: "$profilePicture",
      },
    },
  ];
  if (req.query.name) {
    let regex = new RegExp(req.query.name, "i");
    options.push({ $match: { name: { $regex: regex } } });
  }
  try {
    const players = await Player.aggregate(options).skip(
      parseInt(req.query.page * playersPerPage - playersPerPage)
    );
    res.send({ count: players.length, players: players.slice(0, 20) });
  } catch (error) {
    console.log(error);
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
