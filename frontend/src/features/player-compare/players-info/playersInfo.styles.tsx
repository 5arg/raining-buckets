import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PlayerMetaWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const SelectPlayerDiv = styled.div`
  flex: 0 0 50%;
  text-align: center;
  position: relative;
`;

export const SelectPlayerText = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50%;
  font-size: 30px;
`;
