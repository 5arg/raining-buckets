import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { CareerTotalsType } from "../../../../types/careerTotals";
import { StatText } from "../../../common/common.styles";

type CareerTotalsProps = {
  playerId: string;
};

export default function CareerTotals({ playerId }: CareerTotalsProps) {
  const { isLoading, data, error } = useQuery<{
    data: CareerTotalsType;
  }>(["career-totals", { playerId }], () =>
    axios.get(`http://localhost:3000/players/careertotal/${playerId}`)
  );
  return (
    <>
      <StatText>{`Games played: ${data?.data.gamesPlayed}`}</StatText>
      <StatText>{`Points: ${data?.data.points}`}</StatText>
      <StatText>{`Assists: ${data?.data.assists}`}</StatText>
      <StatText>{`Rebounds: ${data?.data.rebounds}`}</StatText>
      <StatText>{`Blocks: ${data?.data.blocks}`}</StatText>
      <StatText>{`Steals: ${data?.data.steals}`}</StatText>
      <StatText>{`Turnovers: ${data?.data.turnovers}`}</StatText>
      <StatText>{`Field shot percentage: ${
        data?.data.fgPct && (data?.data.fgPct * 100).toFixed(1)
      }%`}</StatText>
      <StatText>{`Three shot percentage: ${
        data?.data.fg3Pct && (data?.data.fg3Pct * 100).toFixed(1)
      }%`}</StatText>
      <StatText>{`Free throw percentage: ${
        data?.data.ftPct && (data.data.ftPct * 100).toFixed(1)
      }%`}</StatText>
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
