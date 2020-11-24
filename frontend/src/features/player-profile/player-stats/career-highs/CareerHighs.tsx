import React from "react";
import { StatText, StatValue } from "../../../common/common.styles";
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
      <StatText>
        Points: <StatValue>{data?.points.map((e) => e.value)[0]}</StatValue>
      </StatText>
      <StatText>
        Assists: <StatValue>{data?.assists.map((e) => e.value)[0]}</StatValue>
      </StatText>
      <StatText>
        Rebounds: <StatValue>{data?.rebounds.map((e) => e.value)[0]}</StatValue>
      </StatText>
      <StatText>
        Blocks: <StatValue>{data?.blocks.map((e) => e.value)[0]}</StatValue>
      </StatText>
      <StatText>
        Steals: <StatValue>{data?.steals.map((e) => e.value)[0]}</StatValue>
      </StatText>
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
