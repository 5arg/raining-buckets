import styled from "styled-components/macro";
import bgCourt from "../../../assets/bg-court.jpg";

export const Background = styled.div`
  height: 100vh;
  background: linear-gradient(0deg, rgb(255, 255, 255, 0.7), rgba(0, 0, 0, 0.5)),
    url(${bgCourt});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
