import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import {
  Wrapper,
  PlayerImage,
  CompareButton,
  Meta,
  PlayerName,
  Info,
  InfoText,
  Input,
  InputWrapper,
  ButtonWrapper,
  JerseyWrapper,
  Jersey,
  JerseyNumber,
} from "./playerInfo.styles";
import { Player } from "../../../types/player";
import {
  heightInFeetAndCm,
  teamAbbrevationToTeamName,
  weightInPoundsAndKg,
} from "../../../utils/Utils";
import jersey from "../../../assets/jersey.jpg";

interface ParamTypes {
  id: string;
}

export default function PlayerInfo() {
  const { id } = useParams<ParamTypes>();
  const { isLoading, data, error } = useQuery<{
    data: Player;
  }>(["players", { id }], () =>
    axios.get(`http://localhost:3000/players/${id}`)
  );
  return (
    <Wrapper>
      <InputWrapper>
        <BiSearchAlt
          style={{ position: "absolute", color: "#ff4a4a", top: 24 }}
        />
        <Input placeholder="Search player" />
      </InputWrapper>
      <ButtonWrapper>
        <CompareButton>Compare</CompareButton>
      </ButtonWrapper>
      <Meta>
        <PlayerImage
          src={`data:image/png;base64,${data?.data.profilePicture}`}
        />
        <PlayerName>{`${data?.data.firstName} ${data?.data.lastName}`}</PlayerName>
        <Info>
          <InfoText>
            {teamAbbrevationToTeamName(data?.data.teamAbbreviation)}
          </InfoText>
          <InfoText>{data?.data.position}</InfoText>
          <InfoText>{heightInFeetAndCm(data?.data.height)}</InfoText>
          <InfoText>{weightInPoundsAndKg(data?.data.weight)}</InfoText>
          <InfoText>
            {new Date(data?.data.birthdate || "").toLocaleDateString()}
          </InfoText>
          <JerseyWrapper>
            <Jersey src={jersey} />
            <JerseyNumber>{data?.data.jerseyNumber}</JerseyNumber>
          </JerseyWrapper>
        </Info>
      </Meta>
    </Wrapper>
  );
}
