import React from "react";
import {
  Container,
  Text,
  NormalLink,
  Title,
  TechnologyText,
} from "./info.styles";

export default function Info() {
  return (
    <Container>
      <Text>
        Raining Buckets is a hobby project which was made in purpose of learning
        new skills regarding web developing.
      </Text>
      <Text> Project is made strictly for non-commercial use.</Text>
      <Text>
        All player data was provided by
        <NormalLink href="https://github.com/bttmly/nba">
          {" "}
          bttmly/nba
        </NormalLink>
        .
      </Text>
      <Text>
        Some players have missing data and not all player images are correct. :)
      </Text>
      <Title>Technologies used:</Title>
      <TechnologyText>NodeJS</TechnologyText>
      <TechnologyText>ExpressJS</TechnologyText>
      <TechnologyText>MongoDB</TechnologyText>
      <TechnologyText>React</TechnologyText>
      <TechnologyText>Typescript</TechnologyText>
    </Container>
  );
}
