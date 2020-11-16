import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 0 0 50%;
  font-size: 18px;
`;

export const ButtonWrapper = styled.div`
  flex: 0 0 50%;
  text-align: right;
`;

export const CompareButton = styled.button`
  height: 20px;
  margin-top: 20px;
  line-height: 2px;
  padding: 18px 28px;
  text-transform: uppercase;
  background-color: #ff4a4a;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  letter-spacing: 1px;
  font-family: PTSansCaption-Regular;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const Meta = styled.div`
  text-align: center;
  flex: 0 0 100%;
`;

export const PlayerImage = styled.img``;

export const PlayerName = styled.p`
  font-family: PTSansCaption-Regular;
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
  font-family: PTSansCaption-Regular;
  font-size: 18px;
  color: #595959;
  letter-spacing: 1px;
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
  font-family: PTSansCaption-Regular;
`;
