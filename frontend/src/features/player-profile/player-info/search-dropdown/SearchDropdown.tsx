import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import {
  Input,
  DropdownWrapper,
  Dropdown,
  DropdownItem,
} from "./searchDropdown.styles";
import { PlayerType } from "../../../../types/player";
import { useHistory } from "react-router-dom";

export default function SearchDropdown() {
  const [searchInput, setSearchInput] = useState<string>("");
  const history = useHistory();
  const { isLoading, resolvedData, error } = usePaginatedQuery<{
    data: PlayerType[];
  }>(
    ["players", { searchInput }],
    () =>
      axios.get(`http://localhost:3000/players/dropdown?name=${searchInput}`),
    {
      onSuccess: (data) => console.log(data),
      enabled: searchInput.trim().length > 0,
    }
  );
  return (
    <>
      <BiSearchAlt
        style={{ position: "absolute", color: "#ff4a4a", top: 24 }}
      />
      <Input
        placeholder="Search player"
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <DropdownWrapper show={searchInput.trim().length > 0}>
        <Dropdown>
          {resolvedData &&
            resolvedData.data.map((player, i) => (
              <DropdownItem
                key={i}
                onClick={() => history.push(`/player/${player._id}`)}
              >
                {player.firstName + " " + player.lastName}
              </DropdownItem>
            ))}
        </Dropdown>
      </DropdownWrapper>
    </>
  );
}
