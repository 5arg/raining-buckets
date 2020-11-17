import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { SeasonAveragesType } from "../../../../types/seasonAverages";
import detectClickOutsideComponent from "../../../../helpers/detectClickOutsideComponent";
import {
  DropdownWrapper,
  DropdownValueWrapper,
  DropdownValue,
  YearOption,
  YearDropdown,
} from "./seasons.styles";

type SeasonsProps = {
  playerId: string;
};

export default function Seasons({ playerId }: SeasonsProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<string>();
  const { isLoading, data, error } = useQuery<{
    data: SeasonAveragesType;
  }>(
    ["season-averages", { playerId }],
    () => axios.get(`http://localhost:3000/players/seasontotals/${playerId}`),
    {
      onSuccess: (data) => {
        setSelectedSeason(data.data.seasons.slice(-1)[0].year);
      },
    }
  );
  const wrapperRef = useRef(null);
  detectClickOutsideComponent(wrapperRef, () => setShowDropdown(false));

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownValueWrapper
        onClick={() => {
          if (!showDropdown) {
            setShowDropdown(true);
          } else {
            setShowDropdown(false);
          }
        }}
      >
        <DropdownValue>
          {"Season: " + selectedSeason}
          {showDropdown ? (
            <BsChevronUp
              style={{
                position: "absolute",
                right: "10px",
                top: "3px",
              }}
            />
          ) : (
            <BsChevronDown
              style={{
                position: "absolute",
                right: "10px",
                top: "3px",
              }}
            />
          )}
        </DropdownValue>
      </DropdownValueWrapper>
      <YearDropdown show={showDropdown}>
        {data?.data.seasons.map((season, i) => (
          <YearOption
            key={i}
            onClick={() => {
              setSelectedSeason(season.year);
              setShowDropdown(false);
            }}
          >
            {season.year}
          </YearOption>
        ))}
      </YearDropdown>
    </DropdownWrapper>
  );
}
