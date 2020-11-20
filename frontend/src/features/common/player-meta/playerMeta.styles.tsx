import styled from "styled-components/macro";

type playerMetaProps = {
  isCompare?: boolean;
};

export const Meta = styled.div<playerMetaProps>`
  text-align: center;
  flex: ${(e) => (e.isCompare ? "0 0 50%" : "0 0 100%")};
`;

export const PlayerImage = styled.img<playerMetaProps>`
  @media (max-width: 800px) {
    width: ${(e) => e.isCompare && "80px"};
  }
`;

export const PlayerName = styled.p<playerMetaProps>`
  font-size: 24px;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    font-size: ${(e) => e.isCompare && "18px"};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InfoText = styled.p<playerMetaProps>`
  flex: 0 0 40%;
  font-size: 20px;
  color: #595959;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    flex: 0 0 100%;
    margin: 10px 0px;
    font-size: ${(e) => e.isCompare && "16px"};
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
