import styled from "styled-components/macro";

type MetaProps = {
  flex: string;
};

export const Meta = styled.div<MetaProps>`
  text-align: center;
  flex: ${(e) => e.flex};
`;

export const PlayerImage = styled.img``;

export const PlayerName = styled.p`
  font-size: 24px;
  letter-spacing: 1px;
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InfoText = styled.p`
  flex: 0 0 40%;
  font-size: 20px;
  color: #595959;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    flex: 0 0 100%;
    margin: 10px 0px;
  }
`;

export const JerseyWrapper = styled.div`
  flex: 0 0 40%;
  position: relative;
`;

export const Jersey = styled.img`
  width: 50px;
`;

export const JerseyNumber = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 16px;
  color: #595959;
`;
