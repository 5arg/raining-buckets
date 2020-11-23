import styled from "styled-components/macro";

export const StatsTitle = styled.p`
  flex: 1 0 0;
  text-align: center;
  letter-spacing: 1px;
  font-size: 22px;
  padding: 5px 0px;
  border-radius: 5px;
  font-weight: bold;
  margin: 0 10px;
  border: 2px solid #ff5e24;
  font-weight: bold;
  width: 50%;
  margin: auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

type StatsTextProps = {
  bold?: boolean;
};

export const StatsText = styled.p<StatsTextProps>`
  font-size: 20px;
  text-align: center;
  margin: 10px 0px;
  font-weight: ${(e) => e.bold && "bold"};
  letter-spacing: 1px;
`;

export const GamesPlayedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;
