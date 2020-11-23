import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "./playersStats.styles";
import CareerAverages from "./career-averages/CareerAverages";
import CareerHighs from "./career-highs/CareerHighs";

interface ParamTypes {
  id1: string;
  id2?: string;
}

export default function PlayersStats() {
  const { id1, id2 } = useParams<ParamTypes>();

  return (
    <Container>
      <CareerAverages playerId1={id1} playerId2={id2} />
      <CareerHighs playerId1={id1} playerId2={id2} />
    </Container>
  );
}
