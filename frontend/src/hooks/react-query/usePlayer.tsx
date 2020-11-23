import { usePaginatedQuery } from "react-query";
import axios from "axios";
import { PlayerType } from "../../types/player";

type getPlayerParams = { playerId: string };

const getPlayer = async (queryName: string, { playerId }: getPlayerParams) => {
  const { data } = await axios.get(`http://localhost:3000/players/${playerId}`);

  return data;
};

export default function usePlayer(playerId: string | undefined) {
  return usePaginatedQuery<PlayerType>(["players", { playerId }], getPlayer, {
    enabled: playerId,
  });
}
