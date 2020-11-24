import React from "react";
import { StatText, StatValue } from "../../../common/common.styles";
import useCareerAverages from "../../../../hooks/react-query/useCareerAverages";

type CareerTotalsProps = {
  playerId: string;
};

export default function CareerTotals({ playerId }: CareerTotalsProps) {
  const { isLoading, data, error } = useCareerAverages(playerId);
  return (
    <>
      <StatText>
        Games played: <StatValue>{data?.gamesPlayed}</StatValue>
      </StatText>
      <StatText>
        Points: <StatValue>{data?.points}</StatValue>
      </StatText>
      <StatText>
        Assists: <StatValue>{data?.assists}</StatValue>
      </StatText>
      <StatText>
        Rebounds: <StatValue>{data?.rebounds}</StatValue>
      </StatText>
      <StatText>
        Blocks: <StatValue>{data?.blocks}</StatValue>
      </StatText>
      <StatText>
        Steals: <StatValue>{data?.steals}</StatValue>
      </StatText>
      <StatText>
        Turnovers: <StatValue>{data?.turnovers}</StatValue>
      </StatText>
      <StatText>
        Field shot percentage:{" "}
        <StatValue>{data?.fgPct && (data?.fgPct * 100).toFixed(1)}%</StatValue>
      </StatText>
      <StatText>
        Three shot percentage:
        <StatValue>
          {data?.fg3Pct && (data?.fg3Pct * 100).toFixed(1)}%
        </StatValue>
      </StatText>
      <StatText>
        Free throw percentage:{" "}
        <StatValue>{data?.ftPct && (data.ftPct * 100).toFixed(1)}%</StatValue>
      </StatText>
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
