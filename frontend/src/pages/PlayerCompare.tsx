import React from "react";
import PlayersStats from "../features/player-compare/players-stats/PlayersStats";
import PlayersInfo from "../features/player-compare/players-info/PlayersInfo";

export default function PlayerCompare() {
  return (
    <>
      <PlayersInfo />
      <PlayersStats />
    </>
  );
}
