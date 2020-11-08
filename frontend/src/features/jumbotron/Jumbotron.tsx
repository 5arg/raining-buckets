import React from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  Title,
  SubTitle,
  AnimationWrapper,
  SearchPlayerButton,
  ChevronDown,
} from "./styles/jumbotron";
import ball from "../../assets/ball.png";

export default function Jumbotron() {
  const props = useSpring({
    to: async (next: any, cancel: any) => {
      await next({ bottom: 0 });
      await next({ bottom: 60 });
      await next({ bottom: 0 });
    },
    from: {
      bottom: 150,
      width: 50,
      height: 50,
      color: "red",
      position: "absolute",
      margin: "auto",
      left: 0,
      right: 0,
    },
    config: { duration: 300 },
    delay: 800,
  });

  return (
    <Background>
      <Title>
        <span style={{ fontSize: 86 }}>R</span>aining{" "}
        <span style={{ fontSize: 86 }}>B</span>uckets
      </Title>
      <SubTitle>Active NBA players stats. Quick. Beautiful.</SubTitle>
      <AnimationWrapper>
        <animated.img src={ball} style={props} />
      </AnimationWrapper>
      <SearchPlayerButton>
        Search Player <ChevronDown />
      </SearchPlayerButton>
    </Background>
  );
}
