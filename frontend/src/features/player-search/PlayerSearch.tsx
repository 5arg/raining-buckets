import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Container,
  SearchWrapper,
  Input,
  PlayerItemsContainer,
  ChangePageButton,
} from "./styles/playerSearch";
import PlayerSearchItem from "./PlayerSearchItem";
import { Player } from "../../types/player";

export default function PlayerSearch() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { isLoading, data, error } = useQuery<{
    data: { count: number; players: Player[] };
  }>(
    ["players", { searchInput, pageNumber }],
    () =>
      axios.get(
        `http://localhost:3000/players?page=${pageNumber}${
          searchInput && `&name=${searchInput}`
        }`
      ),
    { onSuccess: (data) => console.log(data) }
  );

  return (
    <Container>
      <ChangePageButton
        disabled={pageNumber <= 1}
        onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
      >
        <BsChevronLeft />
      </ChangePageButton>
      <SearchWrapper>
        <Input
          onChange={({ target }) => {
            setSearchInput(target.value);
            setPageNumber(1);
          }}
        />
        <PlayerItemsContainer>
          {data?.data.players.map((player) => (
            <PlayerSearchItem player={player} />
          ))}
        </PlayerItemsContainer>
        <p>{data?.data.count}</p>
      </SearchWrapper>
      <ChangePageButton
        disabled={data && data.data.count <= 20}
        onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
      >
        <BsChevronRight />
      </ChangePageButton>
    </Container>
  );
}
