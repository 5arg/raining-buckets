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
import PlayerMeta from "../../common/player-meta/PlayerMeta";

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
      <PlayerMeta playerId={id} flexValue={"0 0 100%"} />
    </Wrapper>
  );
}
