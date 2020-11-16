import React from "react";
import { useParams } from "react-router-dom";
import CareerHighs from "./career-highs/CareerHighs";
import CareerTotals from "./career-totals/CareerTotals";
import Seasons from "./seasons/Seasons";
import { Container, StatTitle, StatsWrapper } from "./playerStats.styles";

interface ParamTypes {
  id: string;
}

export default function PlayerStats() {
  const { id } = useParams<ParamTypes>();
  return (
    <Container>
      <StatsWrapper>
        <StatTitle>Career averages</StatTitle>
        <CareerTotals playerId={id} />
      </StatsWrapper>
      <StatsWrapper>
        <StatTitle>Career highs</StatTitle>
        <CareerHighs playerId={id} />
      </StatsWrapper>
      <StatsWrapper>
        <StatTitle>Seasons</StatTitle>
        <Seasons />
      </StatsWrapper>
    </Container>
  );
}
