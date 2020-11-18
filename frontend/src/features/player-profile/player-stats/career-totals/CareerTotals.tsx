import React from "react";
import { StatText } from "../../../common/common.styles";
import useCareerAverages from "../../../../hooks/react-query/useCareerAverages";

type CareerTotalsProps = {
  playerId: string;
};

export default function CareerTotals({ playerId }: CareerTotalsProps) {
  const { isLoading, data, error } = useCareerAverages(playerId);
  return (
    <>
      <StatText>{`Games played: ${data?.gamesPlayed}`}</StatText>
      <StatText>{`Points: ${data?.points}`}</StatText>
      <StatText>{`Assists: ${data?.assists}`}</StatText>
      <StatText>{`Rebounds: ${data?.rebounds}`}</StatText>
      <StatText>{`Blocks: ${data?.blocks}`}</StatText>
      <StatText>{`Steals: ${data?.steals}`}</StatText>
      <StatText>{`Turnovers: ${data?.turnovers}`}</StatText>
      <StatText>{`Field shot percentage: ${
        data?.fgPct && (data?.fgPct * 100).toFixed(1)
      }%`}</StatText>
      <StatText>{`Three shot percentage: ${
        data?.fg3Pct && (data?.fg3Pct * 100).toFixed(1)
      }%`}</StatText>
      <StatText>{`Free throw percentage: ${
        data?.ftPct && (data.ftPct * 100).toFixed(1)
      }%`}</StatText>
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
