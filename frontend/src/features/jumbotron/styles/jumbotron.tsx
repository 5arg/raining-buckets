import styled from "styled-components/macro";
import bgCourt from "../../../assets/bg-court.jpg";

export const Background = styled.div`
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgb(255, 255, 255, 0.7),
      rgba(40, 40, 40, 0.3)
    ),
    url(${bgCourt});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  padding-top: 90px;
  font-size: 70px;
  font-family: CarroisGothicSC-Regular;
  color: #333333;
  letter-spacing: 3.5px;
`;

export const SubTitle = styled.h3`
  text-transform: uppercase;
  margin-top: 10px;
  font-family: CarroisGothicSC-Regular;
  color: #606060;
  letter-spacing: 2px;
`;

export const AnimationWrapper = styled.div`
  margin-top: 400px;
  position: relative;
`;

export const SearchPlayerButton = styled.button`
  background-color: transparent;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 15px 30px;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  transition: background-color 0.8s, color 0.8s;
  &:hover {
    cursor: pointer;
    background-color: #333333;
    color: white;
    opacity: 0.8;
  }
`;
