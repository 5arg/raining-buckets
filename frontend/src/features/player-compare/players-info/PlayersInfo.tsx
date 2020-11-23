import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import PlayerMeta from "../../common/player-meta/PlayerMeta";
import SearchDropdown from "../../common/search-dropdown/SearchDropdown";
import {
  Container,
  PlayerMetaWrapper,
  SelectPlayerDiv,
  SelectPlayerText,
} from "./playersInfo.styles";

interface ParamTypes {
  id1: string;
  id2?: string;
}

export default function PlayersInfo() {
  const { id1, id2 } = useParams<ParamTypes>();

  return (
    <Container>
      <SearchDropdown baseRoute={`/compare`} compareSecondId={id2} />
      <SearchDropdown baseRoute={`/compare`} compareFirstId={id1} />
      <PlayerMetaWrapper>
        <PlayerMeta playerId={id1} isCompare={true} />
        {id2 ? (
          <PlayerMeta playerId={id2} isCompare={true} />
        ) : (
          <SelectPlayerDiv>
            <SelectPlayerText>
              <BsInfoCircle style={{ marginRight: 10 }} />
              No player selected
            </SelectPlayerText>
          </SelectPlayerDiv>
        )}
      </PlayerMetaWrapper>
    </Container>
  );
}
