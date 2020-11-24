import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 150px;
  background-color: black;
`;

export const Wrapper = styled.div`
  margin: 0px 15% auto;
  color: #e9e6e2;
  line-height: 150px;
`;

export const NormalLink = styled.a`
  text-align: center;
  text-decoration: none;
  margin-right: 50px;

  &:visited {
    color: #e9e6e2;
  }
`;

export const RouterLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  margin-right: 50px;

  &:visited {
    color: #e9e6e2;
  }
`;
