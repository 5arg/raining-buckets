import React, { Fragment } from "react";
import HSBar from "react-horizontal-stacked-bar-chart";
import useCareerHighsTwoPlayers from "../../../../hooks/react-query/useCareerHighsTwoPlayers";
import { formattedStatName } from "../../../../utils/Utils";
import { StatsText, StatsTitle } from "./careerHighs.styles";

type CareerHighsProps = {
  playerId1: string;
  playerId2?: string;
};

export default function CareerHighs({
  playerId1,
  playerId2,
}: CareerHighsProps) {
  const { data } = useCareerHighsTwoPlayers(playerId1, playerId2);
  return (
    <>
      <StatsTitle>Career Highs</StatsTitle>
      {data &&
        Object.keys(data.responsePlayerOne)
          .filter(
            (key) => key !== "gamesPlayed" && key !== "_id" && key !== "__v"
          )
          .map((key, index) => (
            <Fragment key={index}>
              <StatsText>{formattedStatName(key)}</StatsText>
              <HSBar
                height={50}
                showValueIn
                showTextIn
                id="points"
                fontColor="white"
                data={[
                  {
                    value: data.responsePlayerOne[key][0]
                      ? data.responsePlayerOne[key][0].value
                      : 0,
                    color: "#ff5e24",
                  },
                  {
                    value: data.responsePlayerTwo
                      ? data.responsePlayerTwo[key][0]
                        ? data.responsePlayerTwo[key][0].value
                        : 0
                      : 0,
                    color: "black",
                  },
                ]}
              />
            </Fragment>
          ))}
    </>
  );
}
