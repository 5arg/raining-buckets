import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { CareerHighsType } from "../../../../types/careerHighs";
import { Text } from "./careerHighs.styles";

type CareerHighsProps = {
  playerId: string;
};

export default function CareerHighs({ playerId }: CareerHighsProps) {
  const { isLoading, data, error } = useQuery<{
    data: CareerHighsType;
  }>(["career-highs", { playerId }], () =>
    axios.get(`http://localhost:3000/players/careerhighs/${playerId}`)
  );
  if (data?.data.points.length === 0) {
    return <p>Not recorded.</p>;
  }
  return (
    <>
      <Text>{`Points: ${data?.data.points.map((e) => e.value)}`}</Text>
      <Text>{`Assists: ${data?.data.assists.map((e) => e.value)}`}</Text>
      <Text>{`Blocks: ${data?.data.blocks.map((e) => e.value)}`}</Text>
      <Text>{`Steals: ${data?.data.steals.map((e) => e.value)}`}</Text>
    </>
  );
}
