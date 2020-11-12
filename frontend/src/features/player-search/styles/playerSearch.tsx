import styled from "styled-components/macro";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  display: flex;
  justify-content: space-between;
  padding: 15px 0px 80px;
`;

export const SearchWrapper = styled.div`
  flex: 0 0 80%;
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 50px 0px;
  font-size: 20px;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ff4a4a;
  width: 300px;
  text-align: center;
  font-family: PTSansCaption-Regular;
  font-size: 20px;
  line-height: 1.6;
`;

export const PlayerItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
`;

type ChangePageButtonProps = {
  disabled: boolean;
};

export const ChangePageButton = styled.button`
  flex: 0 0 10%;
  margin-top: 110px;
  background: transparent;
  outline: none;
  font-size: 30px;
  border: none;
  &:hover {
    cursor: pointer;
    color: ${({ disabled }: ChangePageButtonProps) => !disabled && "#ff4a4a"};
  }
`;

export const PlayerImage = styled.img`
  opacity: 0.5;
  transition: opacity 1s;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const PlayerName = styled.p`
  font-family: PTSansCaption-Regular;
  font-size: 18px;
  letter-spacing: 1px;
  transition: font-weight 1s;
  margin: 8px 0px;
`;

export const TeamAbbreviation = styled.p`
  color: #75758b;
  position: absolute;
  left: 10px;
  font-size: 20px;
  opacity: 0.7;
  transform: rotate(-45deg);
  transition: opacity 1s, transform 1s, color 1s;
`;

export const PlayerItem = styled.div`
  flex: 0 0 23%;
  margin-top: 10px;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 6px 10px;
  &:hover {
    cursor: pointer;
  }
  &:hover ${PlayerImage} {
    opacity: 1;
  }
  &:hover ${TeamAbbreviation} {
    opacity: 1;
    transform: rotate(0deg);
    color: #47474a;
  }

  @media (max-width: 1300px) {
    flex: 0 0 33.333333333%;
  }

  @media (max-width: 1000px) {
    flex: 0 0 50%;
  }

  @media (max-width: 600px) {
    flex: 0 0 40%;
    padding: 10px;
  }
  @media (max-width: 500px) {
    flex: 0 0 90%;
    padding: 10px;
  }
`;
