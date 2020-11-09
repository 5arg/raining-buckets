import React from "react";
import { Player } from "../../types/player";
import { PlayerItem } from "./styles/playerSearch";

type PlayerSearchItemProps = {
  player: Player;
};

export default function PlayerSearchItem({ player }: PlayerSearchItemProps) {
  return (
    <PlayerItem>
      <p>{player.firstName + " " + player.lastName}</p>
    </PlayerItem>
  );
}
