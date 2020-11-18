import { useQuery } from "react-query";
import axios from "axios";
import { CareerTotalsType } from "../../types/careerTotals";

type getCareerAveragesParams = { playerId: string };

const getCareerAverages = async (
  queryName: string,
  { playerId }: getCareerAveragesParams
) => {
  const { data } = await axios.get(
    `http://localhost:3000/players/careertotal/${playerId}`
  );

  return data;
};

export default function useCareerAverages(playerId: string) {
  return useQuery<CareerTotalsType>(
    ["career-averages", { playerId }],
    getCareerAverages
  );
}
