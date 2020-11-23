import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Wrapper,
  CompareButton,
  InputWrapper,
  ButtonWrapper,
} from "./playerInfo.styles";
import SearchDropdown from "../../common/search-dropdown/SearchDropdown";
import PlayerMeta from "../../common/player-meta/PlayerMeta";

interface ParamTypes {
  id: string;
}

export default function PlayerInfo() {
  const { id } = useParams<ParamTypes>();
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
      <PlayerMeta playerId={id} />
    </Wrapper>
  );
}
