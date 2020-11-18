import React, { useEffect, useRef, useState } from "react";
import { usePaginatedQuery } from "react-query";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import {
  Input,
  DropdownWrapper,
  Dropdown,
  DropdownItem,
  SearchWrapper,
} from "./searchDropdown.styles";
import { PlayerType } from "../../../../types/player";
import detectClickOutsideComponent from "../../../../helpers/detectClickOutsideComponent";

export default function SearchDropdown() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const history = useHistory();
  const { resolvedData } = usePaginatedQuery<{
    data: PlayerType[];
  }>(
    ["players", { searchInput }],
    () =>
      axios.get(`http://localhost:3000/players/dropdown?name=${searchInput}`),
    {
      enabled: searchInput.trim().length > 0,
    }
  );
  const wrapperRef = useRef(null);
  detectClickOutsideComponent(wrapperRef, () => setShowDropdown(false));

  useEffect(() => {
    if (searchInput.trim().length > 0) {
      setShowDropdown(true);
    }
  }, [searchInput, setShowDropdown]);

  return (
    <SearchWrapper ref={wrapperRef}>
      <BiSearchAlt
        style={{ position: "absolute", color: "#ff4a4a", top: 24 }}
      />
      <Input
        placeholder="Search player"
        onChange={(event) => setSearchInput(event.target.value)}
        value={searchInput}
      />
      <DropdownWrapper show={searchInput.trim().length > 0 && showDropdown}>
        <Dropdown>
          {resolvedData &&
            resolvedData.data.map((player, i) => (
              <DropdownItem
                key={i}
                onClick={() => {
                  history.push(`/player/${player._id}`);
                  setSearchInput("");
                }}
              >
                {player.firstName + " " + player.lastName}
              </DropdownItem>
            ))}
        </Dropdown>
      </DropdownWrapper>
    </SearchWrapper>
  );
}
