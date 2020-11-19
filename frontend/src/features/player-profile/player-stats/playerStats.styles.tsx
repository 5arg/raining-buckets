import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

export const StatsWrapper = styled.div`
  flex: 1 0 0;
  text-align: center;

  @media (max-width: 1100px) {
    flex: 0 0 100%;
  }
`;

export const StatTitle = styled.p`
  flex: 1 0 0;
  text-align: center;
  letter-spacing: 1px;
  font-size: 22px;
  padding: 5px 0px;
  border-radius: 5px;
  font-weight: bold;
  margin: 0 10px;
  transition: border 0.7s;
  border: 2px solid #ff4a4a;
  font-weight: bold;
`;
