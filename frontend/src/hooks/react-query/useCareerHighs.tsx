import { useQuery } from "react-query";
import axios from "axios";
import { CareerHighsType } from "../../types/careerHighs";

type getCareerHighsParams = { playerId: string };

const getCareerHighs = async (
  queryName: string,
  { playerId }: getCareerHighsParams
) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/players/careerhighs/${playerId}`
  );

  return data;
};

export default function useCareerHighs(playerId: string) {
  return useQuery<CareerHighsType>(
    ["career-highs", { playerId }],
    getCareerHighs
  );
}
