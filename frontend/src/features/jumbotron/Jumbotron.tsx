import React from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  Title,
  SubTitle,
  SearchPlayerButton,
  ChevronDown,
} from "./styles/jumbotron";

export default function Jumbotron() {
  return (
    <Background>
      <Title>
        <span style={{ fontSize: 86 }}>R</span>aining{" "}
        <span style={{ fontSize: 86 }}>B</span>uckets
      </Title>
      <SubTitle>Active NBA players stats. Quick. Beautiful.</SubTitle>

      <SearchPlayerButton>
        Search Player <ChevronDown />
      </SearchPlayerButton>
    </Background>
  );
}
