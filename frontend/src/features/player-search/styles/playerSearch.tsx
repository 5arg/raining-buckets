import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const SearchWrapper = styled.div`
  flex-grow: 4;
  flex-basis: auto;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ff4a4a;
`;

export const ChangePageButton = styled.button`
  flex-grow: 1;
  background: transparent;
  outline: none;
  font-size: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
