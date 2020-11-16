import React, { useState } from "react";
import axios from "axios";
import { usePaginatedQuery } from "react-query";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import {
  Container,
  SearchWrapper,
  InputWrapper,
  Input,
  PlayerItemsContainer,
  ChangePageButton,
} from "./playerSearch.styles";
import PlayerSearchItem from "./player-search-item/PlayerSearchItem";
import { PlayerType } from "../../types/player";

export default function PlayerSearch() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { isLoading, resolvedData, error } = usePaginatedQuery<{
    data: { count: number; players: PlayerType[] };
  }>(["players", { searchInput, pageNumber }], () =>
    axios.get(
      `http://localhost:3000/players?page=${pageNumber}${
        searchInput && `&name=${searchInput}`
      }`
    )
  );

  return (
    <Container name="player-search">
      <ChangePageButton
        disabled={pageNumber <= 1}
        onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
      >
        <BsChevronLeft />
      </ChangePageButton>
      <SearchWrapper>
        <InputWrapper>
          <BiSearchAlt
            style={{ position: "absolute", color: "#ff4a4a", bottom: 55 }}
          />
          <Input
            onChange={({ target }) => {
              setSearchInput(target.value);
              setPageNumber(1);
            }}
            placeholder="Enter player name"
          />
        </InputWrapper>
        <PlayerItemsContainer>
          {resolvedData?.data.players.map((player, i) => (
            <PlayerSearchItem key={i} player={player} />
          ))}
        </PlayerItemsContainer>
      </SearchWrapper>
      <ChangePageButton
        disabled={(resolvedData && resolvedData.data.count <= 20) || false}
        onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
      >
        <BsChevronRight />
      </ChangePageButton>
    </Container>
  );
}
