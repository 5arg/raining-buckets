import { usePaginatedQuery } from "react-query";
import axios from "axios";
import { PlayerType } from "../../types/player";

type getPlayersParams = { pageNumber: number; searchInput: string };

const getPlayers = async (
  queryName: string,
  { pageNumber, searchInput }: getPlayersParams
) => {
  const { data } = await axios.get(
    `http://localhost:3000/players?page=${pageNumber}${
      searchInput && `&name=${searchInput}`
    }`
  );

  return data;
};

export default function usePlayers(pageNumber: number, searchInput: string) {
  return usePaginatedQuery<{
    count: number;
    players: PlayerType[];
  }>(["players", { searchInput, pageNumber }], getPlayers);
}
