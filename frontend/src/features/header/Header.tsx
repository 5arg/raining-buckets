import React from "react";
import { Container, Wrapper, HeaderText } from "./header.styles";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <HeaderText to="/">Raining Buckets</HeaderText>
      </Wrapper>
    </Container>
  );
}
