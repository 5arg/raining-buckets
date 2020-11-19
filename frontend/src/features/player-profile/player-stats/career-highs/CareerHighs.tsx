import React from "react";
import { StatText } from "../../../common/common.styles";
import useCareerHighs from "../../../../hooks/react-query/useCareerHighs";

type CareerHighsProps = {
  playerId: string;
};

export default function CareerHighs({ playerId }: CareerHighsProps) {
  const { isLoading, data, error } = useCareerHighs(playerId);

  if (data?.points.length === 0) {
    return <p>Not recorded.</p>;
  }
  return (
    <>
      <StatText>{`Points: ${data?.points.map((e) => e.value)[0]}`}</StatText>
      <StatText>{`Assists: ${data?.assists.map((e) => e.value)[0]}`}</StatText>
      <StatText>{`Rebounds: ${
        data?.rebounds.map((e) => e.value)[0]
      }`}</StatText>
      <StatText>{`Blocks: ${data?.blocks.map((e) => e.value)[0]}`}</StatText>
      <StatText>{`Steals: ${data?.steals.map((e) => e.value)[0]}`}</StatText>
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
