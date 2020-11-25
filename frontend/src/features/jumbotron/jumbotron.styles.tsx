import styled from "styled-components/macro";
import { BsChevronDown } from "react-icons/bs";
import bgCourt from "../../assets/bg43.jpg";

export const Background = styled.div`
  height: 100vh;
  background: url(${bgCourt});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  padding-top: 150px;
  font-size: 70px;
  font-family: CarroisGothicSC-Regular;
  color: #e9e6e2;
  letter-spacing: 3.5px;
  text-shadow: 1px 1px black;
`;

export const SubTitle = styled.h3`
  text-transform: uppercase;
  margin-top: 10px;
  font-family: CarroisGothicSC-Regular;
  color: #d4d4d4;
  letter-spacing: 2px;
  text-shadow: 1px 1px black;
`;

export const SearchPlayerButton = styled.button`
  margin-top: 400px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  outline: none;
  opacity: 0.8;
  transition: opacity 0.8s, background-color 0.8s, color 0.8s;

  &:hover {
    cursor: pointer;
    color: #ff5e24;
    opacity: 1;
  }

  @media (max-width: 1000px) {
    margin-top: 100px;
  }
`;

export const ChevronDown = styled(BsChevronDown)`
  margin-bottom: 2px;
  vertical-align: middle;
`;
