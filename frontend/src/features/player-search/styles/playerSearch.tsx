import styled from "styled-components/macro";

export const Container = styled.div`
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

export const ChangePageButton = styled.button`
  flex: 0 0 10%;
  background: transparent;
  outline: none;
  font-size: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const PlayerImage = styled.img`
  opacity: 0.5;
  transition: opacity 1s;
`;

export const PlayerName = styled.p`
  font-family: PTSansCaption-Regular;
  font-size: 18px;
  letter-spacing: 1px;
  transition: font-weight 1s;
  margin: 8px 0px;
`;

export const PlayerItem = styled.div`
  flex: 0 0 20%;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
  &:hover ${PlayerImage} {
    opacity: 1;
  }
  &:hover ${PlayerName} {
    font-weight: bold;
  }
  @media (max-width: 1300px) {
    flex: 0 0 25%;
  }
  @media (max-width: 1000px) {
    flex: 0 0 33.333333333%;
  }
`;
