import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import {
  Input,
  DropdownWrapper,
  Dropdown,
  DropdownItem,
  SearchWrapper,
} from "./searchDropdown.styles";
import useDetectClickOutside from "../../../hooks/useDetectClickOutside";
import usePlayersDropdown from "../../../hooks/react-query/usePlayersDropdown";

type SearchDropdownProps = {
  baseRoute: string;
  compareFirstId?: string;
  compareSecondId?: string;
};

export default function SearchDropdown({
  baseRoute,
  compareFirstId,
  compareSecondId,
}: SearchDropdownProps) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const history = useHistory();
  const { resolvedData } = usePlayersDropdown(searchInput);
  const wrapperRef = useRef(null);
  useDetectClickOutside(wrapperRef, () => setShowDropdown(false));

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
            resolvedData?.map((player, i) => (
              <DropdownItem
                key={i}
                onClick={() => {
                  let route;
                  if (compareFirstId) {
                    route = `${baseRoute}/${compareFirstId}/${player._id}`;
                  } else if (compareSecondId) {
                    route = `${baseRoute}/${player._id}/${compareSecondId}`;
                  } else {
                    route = `${baseRoute}/${player._id}`;
                  }
                  history.push(route);
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
