import React, { useEffect } from "react";
import { Link } from "react-scroll";
import {
  Background,
  Title,
  SubTitle,
  SearchPlayerButton,
  ChevronDown,
} from "./jumbotron.styles";

export default function Jumbotron() {
  useEffect(() => {
    let viewheight = window.innerHeight;
    let viewwidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]");
    viewport?.setAttribute(
      "content",
      "height=" +
        viewheight +
        "px, width=" +
        viewwidth +
        "px, initial-scale=1.0"
    );
  }, []);
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
