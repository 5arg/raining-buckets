import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Container,
  SearchWrapper,
  Input,
  ChangePageButton,
} from "./styles/playerSearch";

type PlayerType = {
  firstName: string;
  lastName: string;
  teamAbbreviation: string;
  teamId: number;
  birthdate: string;
  height: string;
  weight: string;
  position: string;
  jerseyNumber: string;
  profilePicture: Buffer;
};

export default function PlayerSearch() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { isLoading, data, error } = useQuery<{
    data: { count: number; players: PlayerType[] };
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
        {data?.data.players.map((player) => (
          <p>{player.firstName + " " + player.lastName}</p>
        ))}
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
