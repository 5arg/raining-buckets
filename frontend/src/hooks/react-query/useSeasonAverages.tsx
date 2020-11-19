import { useQuery } from "react-query";
import axios from "axios";
import { SeasonAveragesType, SeasonType } from "../../types/seasonAverages";

type getSeasonAveragesParams = { playerId: string };

const getSeasonAverages = async (
  queryName: string,
  { playerId }: getSeasonAveragesParams
) => {
  const { data } = await axios.get(
    `http://localhost:3000/players/seasontotals/${playerId}`
  );

  return data;
};

export default function useSeasonAverages(
  playerId: string,
  setSeasonCallback: (season: SeasonType) => void
) {
  return useQuery<SeasonAveragesType>(
    ["season-averages", { playerId }],
    getSeasonAverages,
    {
      onSuccess: (data) => {
        setSeasonCallback(data.seasons.slice(-1)[0]);
      },
      refetchOnWindowFocus: false,
    }
  );
}
