import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 40px 0;
  height: calc(100vh - 330px);

  @media (max-width: 500px) {
    height: auto;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const NormalLink = styled.a`
  text-decoration: none;
  color: #ff5e24;
`;

export const Title = styled.h1`
  margin: 70px 0px 50px 0px;
`;

export const TechnologyText = styled.p`
  color: #595959;
  font-size: 20px;
`;
