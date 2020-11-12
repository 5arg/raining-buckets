import React from "react";
import { Player } from "../../types/player";
import {
  PlayerItem,
  PlayerImage,
  PlayerName,
  TeamAbbreviation,
} from "./styles/playerSearch";

type PlayerSearchItemProps = {
  player: Player;
};

export default function PlayerSearchItem({ player }: PlayerSearchItemProps) {
  return (
    <PlayerItem>
      <TeamAbbreviation>{player.teamAbbreviation || "FA"}</TeamAbbreviation>
      <PlayerImage src={"data:image/png;base64," + player.profilePicture} />
      <PlayerName>{player.firstName + " " + player.lastName}</PlayerName>
    </PlayerItem>
  );
}
