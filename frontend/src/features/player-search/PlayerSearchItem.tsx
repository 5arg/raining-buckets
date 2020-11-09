import React from "react";
import { Player } from "../../types/player";
import { PlayerItem, PlayerImage } from "./styles/playerSearch";

type PlayerSearchItemProps = {
  player: Player;
};

export default function PlayerSearchItem({ player }: PlayerSearchItemProps) {
  return (
    <PlayerItem>
      <PlayerImage src={"data:image/png;base64," + player.profilePicture} />
      <p>{player.firstName + " " + player.lastName}</p>
    </PlayerItem>
  );
}
