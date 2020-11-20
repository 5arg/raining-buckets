import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import HSBar from "react-horizontal-stacked-bar-chart";
import {
  Container,
  GamesPlayedWrapper,
  StatsText,
  StatsTitle,
} from "./playersStats.styles";
import useCareerAveragesTwoPlayers from "../../../../hooks/react-query/useCareerAveragesTwoPlayers";
import { formattedStatName } from "../../../../utils/Utils";

interface ParamTypes {
  id1: string;
  id2?: string;
}

export default function PlayersStats() {
  const { id1, id2 } = useParams<ParamTypes>();
  const { data } = useCareerAveragesTwoPlayers(id1, id2);
  console.log(data);

  return (
    <Container>
      <StatsTitle>Career Averages</StatsTitle>
      <GamesPlayedWrapper>
        <StatsText>{data?.responsePlayerOne.gamesPlayed}</StatsText>
        <StatsText bold={true}>Games played</StatsText>
        <StatsText>{data?.responsePlayerTwo?.gamesPlayed}</StatsText>
      </GamesPlayedWrapper>
      {data &&
        Object.keys(data.responsePlayerOne)
          .filter(
            (key) => key !== "gamesPlayed" && key !== "_id" && key !== "__v"
          )
          .map((key, index) => (
            <Fragment key={index}>
              <StatsText bold={true}>{formattedStatName(key)}</StatsText>
              <HSBar
                height={50}
                showValueIn
                showTextIn
                id="points"
                fontColor="white"
                data={[
                  {
                    value: data.responsePlayerOne[key],
                    color: "#ff4a4a",
                    description:
                      key === "fgPct" || key === "fg3Pct" || key === "ftPct"
                        ? `${(data.responsePlayerOne[key] * 100).toFixed(1)}%`
                        : "",
                  },
                  {
                    value: data.responsePlayerTwo
                      ? data.responsePlayerTwo[key]
                      : 0,
                    color: "#2f3a2f",
                    description:
                      key === "fgPct" || key === "fg3Pct" || key === "ftPct"
                        ? `${
                            data.responsePlayerTwo &&
                            (data.responsePlayerTwo[key] * 100).toFixed(1)
                          }%`
                        : "",
                  },
                ]}
              />
            </Fragment>
          ))}
    </Container>
  );
}
