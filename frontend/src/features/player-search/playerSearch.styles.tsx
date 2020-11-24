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
  border-bottom: 1px solid #ff5e24;
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
  font-size: 40px;
  border: none;
  &:hover {
    cursor: pointer;
    color: ${({ disabled }: ChangePageButtonProps) => !disabled && "#ff5e24"};
  }
`;
