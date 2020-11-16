import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`;

type TabButtonProps = {
  active?: boolean;
};

export const StatsWrapper = styled.div`
  flex: 1 0 0;
  text-align: center;
`;

export const StatTitle = styled.p<TabButtonProps>`
  flex: 1 0 0;
  text-align: center;
  font-family: PTSansCaption-Regular;
  letter-spacing: 1px;
  font-size: 22px;
  padding: 5px 0px;
  border-radius: 5px;
  border: ${(e) => (e.active ? "2px solid #ff4a4a" : "2px solid white")};
  font-weight: ${(e) => (e.active ? "bold" : "normal")};
  margin-right: 20px;
  transition: border 0.7s;
  border: 2px solid #ff4a4a;
  font-weight: bold;
`;
