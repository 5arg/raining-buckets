import React from "react";
import { useSpring, animated } from "react-spring";
import { Background } from "./styles/jumbotron";
import ball from "../../assets/ball.png";

export default function Jumbotron() {
  const props = useSpring({
    to: async (next: any, cancel: any) => {
      await next({ bottom: 0 });
      await next({ bottom: 50 });
      await next({ bottom: 0 });
    },
    from: {
      bottom: 150,
      width: 50,
      height: 50,
      color: "red",
      position: "absolute",
    },
    config: { duration: 300 },
  });

  return <Background />;
}
