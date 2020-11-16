import React from "react";
import { useHistory } from "react-router-dom";
import { PlayerType } from "../../../types/player";
import {
  PlayerItem,
  PlayerImage,
  PlayerName,
  TeamAbbreviation,
} from "./playerSearchItem.styles";

type PlayerSearchItemProps = {
  player: PlayerType;
};

export default function PlayerSearchItem({ player }: PlayerSearchItemProps) {
  const history = useHistory();
  return (
    <PlayerItem
      onClick={() => {
        history.push(`/player/${player._id}`);
      }}
    >
      <TeamAbbreviation>{player.teamAbbreviation || "FA"}</TeamAbbreviation>
      <PlayerImage src={"data:image/png;base64," + player.profilePicture} />
      <PlayerName>{player.firstName + " " + player.lastName}</PlayerName>
    </PlayerItem>
  );
}
