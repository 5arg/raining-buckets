import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Wrapper,
  PlayerImage,
  CompareButton,
  Meta,
  PlayerName,
  Info,
  InfoText,
  InputWrapper,
  ButtonWrapper,
  JerseyWrapper,
  Jersey,
  JerseyNumber,
} from "./playerInfo.styles";
import SearchDropdown from "../../common/search-dropdown/SearchDropdown";
import {
  heightInFeetAndCm,
  teamAbbrevationToTeamName,
  weightInPoundsAndKg,
} from "../../../utils/Utils";
import jersey from "../../../assets/jersey.jpg";
import usePlayer from "../../../hooks/react-query/usePlayer";

interface ParamTypes {
  id: string;
}

export default function PlayerInfo() {
  const { id } = useParams<ParamTypes>();
  const { isLoading, data, error } = usePlayer(id);
  return (
    <Wrapper>
      <InputWrapper>
        <SearchDropdown baseRoute={`/player`} />
      </InputWrapper>
      <ButtonWrapper>
        <Link to={`/compare/${id}`}>
          <CompareButton>Compare</CompareButton>
        </Link>
      </ButtonWrapper>
      {data && (
        <Meta>
          <PlayerImage src={`data:image/png;base64,${data.profilePicture}`} />
          <PlayerName>{`${data?.firstName} ${data.lastName}`}</PlayerName>
          <Info>
            <InfoText>
              {teamAbbrevationToTeamName(data.teamAbbreviation)}
            </InfoText>
            <InfoText>{data?.position}</InfoText>
            <InfoText>{heightInFeetAndCm(data.height)}</InfoText>
            <InfoText>{weightInPoundsAndKg(data.weight)}</InfoText>
            <InfoText>
              {new Date(data?.birthdate || "").toLocaleDateString()}
            </InfoText>
            <JerseyWrapper>
              <Jersey src={jersey} />
              <JerseyNumber>{data?.jerseyNumber}</JerseyNumber>
            </JerseyWrapper>
          </Info>
        </Meta>
      )}
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </Wrapper>
  );
}
