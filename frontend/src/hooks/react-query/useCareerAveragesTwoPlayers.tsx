import { useQuery } from "react-query";
import axios from "axios";
import { CareerTotalsType } from "../../types/careerTotals";

type getCareerAveragesParams = {
  playerId1: string;
  playerId2: string | undefined;
};

const getCareerAveragesTwoPlayers = async (
  queryName: string,
  { playerId1, playerId2 }: getCareerAveragesParams
) => {
  let data: any = {};

  if (playerId2) {
    await axios
      .all([
        axios.get(`http://localhost:3000/players/careertotal/${playerId1}`),
        axios.get(`http://localhost:3000/players/careertotal/${playerId2}`),
      ])
      .then(
        axios.spread((responsePlayerOne, responsePlayerTwo) => {
          let resultData = {
            responsePlayerOne: responsePlayerOne.data,
            responsePlayerTwo: responsePlayerTwo.data,
          };
          Object.assign(data, resultData);
        })
      );
  } else {
    let resultData = await axios.get(
      `http://localhost:3000/players/careertotal/${playerId1}`
    );
    Object.assign(data, { responsePlayerOne: resultData.data });
  }

  return data;
};

export default function useCareerAveragesTwoPlayers(
  playerId1: string,
  playerId2?: string
) {
  return useQuery<{
    responsePlayerOne: CareerTotalsType;
    responsePlayerTwo?: CareerTotalsType;
  }>(
    ["career-averages", { playerId1, playerId2 }],
    getCareerAveragesTwoPlayers,
    { enabled: playerId1, refetchOnWindowFocus: false }
  );
}
