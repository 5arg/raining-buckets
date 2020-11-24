import React from "react";
import { Container, Wrapper, RouterLink, NormalLink } from "./footer.styles";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <NormalLink href="https://www.nba.com/">NBA</NormalLink>
        <NormalLink href="https://github.com/5arg/raining-buckets">
          Github
        </NormalLink>
        <RouterLink to="/info">Info</RouterLink>
      </Wrapper>
    </Container>
  );
}
