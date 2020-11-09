import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  flex: 0 0 80%;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ff4a4a;
`;

export const PlayerItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
`;

export const ChangePageButton = styled.button`
  flex-basis: auto;
  background: transparent;
  outline: none;
  font-size: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const PlayerItem = styled.div`
  flex: 0 0 20%;
  border: 1px solid black;
  margin-top: 5px;
`;
