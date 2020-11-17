import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {
  SeasonAveragesType,
  SeasonType,
} from "../../../../types/seasonAverages";
import detectClickOutsideComponent from "../../../../helpers/detectClickOutsideComponent";
import {
  DropdownWrapper,
  DropdownValueWrapper,
  DropdownValue,
  YearOption,
  YearDropdown,
  Text,
} from "./seasons.styles";

type SeasonsProps = {
  playerId: string;
};

export default function Seasons({ playerId }: SeasonsProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<SeasonType>();
  const { isLoading, data, error } = useQuery<{
    data: SeasonAveragesType;
  }>(
    ["season-averages", { playerId }],
    () => axios.get(`http://localhost:3000/players/seasontotals/${playerId}`),
    {
      onSuccess: (data) => {
        setSelectedSeason(data.data.seasons.slice(-1)[0]);
      },
      refetchOnWindowFocus: false,
    }
  );
  const wrapperRef = useRef(null);
  detectClickOutsideComponent(wrapperRef, () => setShowDropdown(false));

  const dropdownIndicatorIconStyle: React.CSSProperties = {
    position: "absolute",
    right: "10px",
    top: "3px",
  };

  return (
    <>
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
            {"Season: " + selectedSeason?.year}
            {showDropdown ? (
              <BsChevronUp style={dropdownIndicatorIconStyle} />
            ) : (
              <BsChevronDown style={dropdownIndicatorIconStyle} />
            )}
          </DropdownValue>
        </DropdownValueWrapper>
        <YearDropdown show={showDropdown}>
          {data?.data.seasons.map((season, i) => (
            <YearOption
              key={i}
              onClick={() => {
                setSelectedSeason(season);
                setShowDropdown(false);
              }}
            >
              {season.year}
            </YearOption>
          ))}
        </YearDropdown>
      </DropdownWrapper>
      <Text>{`${
        selectedSeason && selectedSeason.teams.length > 1 ? "Teams" : "Team"
      }: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.team)
        .join(" | ")}`}</Text>
      <Text>{`Games played: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.gamesPlayed)
        .join(" | ")}`}</Text>
      <Text>{`Points: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.points)
        .join(" | ")}`}</Text>
      <Text>{`Assists: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.assists)
        .join(" | ")}`}</Text>
      <Text>{`Rebounds: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.rebounds)
        .join(" | ")}`}</Text>
      <Text>{`Blocks: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.blocks)
        .join(" | ")}`}</Text>
      <Text>{`Steals: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.steals)
        .join(" | ")}`}</Text>
      <Text>{`Turnovers: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.turnovers)
        .join(" | ")}`}</Text>
      <Text>{`Field shot percentage: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => (team.fgPct * 100).toFixed(1) + "%")
        .join(" | ")}`}</Text>
      <Text>{`Three shot percentage: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => (team.fg3Pct * 100).toFixed(1) + "%")
        .join(" | ")}`}</Text>
      <Text>{`Free throw percentage: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => (team.ftPct * 100).toFixed(1) + "%")
        .join(" | ")}`}</Text>
    </>
  );
}
