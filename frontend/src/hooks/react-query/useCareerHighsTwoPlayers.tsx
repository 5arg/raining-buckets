import { useQuery } from "react-query";
import axios from "axios";
import { CareerHighsType } from "../../types/careerHighs";

type getCareerHigshTwoPlayersParams = {
  playerId1: string;
  playerId2: string | undefined;
};

const getCareerHighsTwoPlayers = async (
  queryName: string,
  { playerId1, playerId2 }: getCareerHigshTwoPlayersParams
) => {
  let data: any = {};

  if (playerId2) {
    await axios
      .all([
        axios.get(`http://localhost:3000/players/careerhighs/${playerId1}`),
        axios.get(`http://localhost:3000/players/careerhighs/${playerId2}`),
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
      `http://localhost:3000/players/careerhighs/${playerId1}`
    );
    Object.assign(data, { responsePlayerOne: resultData.data });
  }

  return data;
};

export default function useCareerHighsTwoPlayers(
  playerId1: string,
  playerId2?: string
) {
  return useQuery<{
    responsePlayerOne: CareerHighsType;
    responsePlayerTwo?: CareerHighsType;
  }>(
    ["career-highs-two-players", { playerId1, playerId2 }],
    getCareerHighsTwoPlayers,
    { enabled: playerId1, refetchOnWindowFocus: false }
  );
}
