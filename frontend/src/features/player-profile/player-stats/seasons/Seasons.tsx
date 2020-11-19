import React, { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { SeasonType } from "../../../../types/seasonAverages";
import useDetectClickOutside from "../../../../hooks/useDetectClickOutside";
import {
  DropdownWrapper,
  DropdownValueWrapper,
  DropdownValue,
  YearOption,
  YearDropdown,
} from "./seasons.styles";
import { StatText } from "../../../common/common.styles";
import useSeasonAverages from "../../../../hooks/react-query/useSeasonAverages";

type SeasonsProps = {
  playerId: string;
};

export default function Seasons({ playerId }: SeasonsProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<SeasonType>();
  const { isLoading, data, error } = useSeasonAverages(
    playerId,
    setSelectedSeason
  );
  const wrapperRef = useRef(null);
  useDetectClickOutside(wrapperRef, () => setShowDropdown(false));

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
          {data?.seasons.map((season, i) => (
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
      <StatText>{`${
        selectedSeason && selectedSeason.teams.length > 1 ? "Teams" : "Team"
      }: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.team)
        .join(" | ")}`}</StatText>
      <StatText>{`Games played: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.gamesPlayed)
        .join(" | ")}`}</StatText>
      <StatText>{`Points: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.points)
        .join(" | ")}`}</StatText>
      <StatText>{`Assists: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.assists)
        .join(" | ")}`}</StatText>
      <StatText>{`Rebounds: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.rebounds)
        .join(" | ")}`}</StatText>
      <StatText>{`Blocks: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.blocks)
        .join(" | ")}`}</StatText>
      <StatText>{`Steals: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.steals)
        .join(" | ")}`}</StatText>
      <StatText>{`Turnovers: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => team.turnovers)
        .join(" | ")}`}</StatText>
      <StatText>{`Field shot percentage: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => (team.fgPct * 100).toFixed(1) + "%")
        .join(" | ")}`}</StatText>
      <StatText>{`Three shot percentage: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => (team.fg3Pct * 100).toFixed(1) + "%")
        .join(" | ")}`}</StatText>
      <StatText>{`Free throw percentage: ${selectedSeason?.teams
        .filter((team) => team.team !== "TOT")
        .map((team) => (team.ftPct * 100).toFixed(1) + "%")
        .join(" | ")}`}</StatText>
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
