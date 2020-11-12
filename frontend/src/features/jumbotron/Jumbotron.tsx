import React from "react";
import { Link } from "react-scroll";
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
      <Link
        activeClass="active"
        to="player-search"
        smooth={true}
        duration={500}
      >
        <SearchPlayerButton>
          Search Player <ChevronDown />
        </SearchPlayerButton>
      </Link>
    </Background>
  );
}
