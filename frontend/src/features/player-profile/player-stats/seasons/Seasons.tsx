import React, { useRef, useState } from "react";
import Loader from "react-loader-spinner";
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
import { StatText, StatValue } from "../../../common/common.styles";
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
      {data && (
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
          <StatText>
            {`${
              selectedSeason && selectedSeason.teams.length > 1
                ? "Teams"
                : "Team"
            }: `}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.team)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Games played:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.gamesPlayed)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Points:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.points)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Assists:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.assists)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Rebounds:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.rebounds)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Blocks:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.blocks)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Steals:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.steals)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Turnovers:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => team.turnovers)
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Field shot percentage:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => (team.fgPct * 100).toFixed(1) + "%")
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Three shot percentage:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => (team.fg3Pct * 100).toFixed(1) + "%")
                .join(" | ")}
            </StatValue>
          </StatText>
          <StatText>
            Free throw percentage:{" "}
            <StatValue>
              {selectedSeason?.teams
                .filter((team) => team.team !== "TOT")
                .map((team) => (team.ftPct * 100).toFixed(1) + "%")
                .join(" | ")}
            </StatValue>
          </StatText>
        </>
      )}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#ff5e24"
          height={50}
          width={50}
          visible={true}
          style={{ margin: "auto" }}
        />
      )}
      {error && <p>There has been an error.</p>}
    </>
  );
}
