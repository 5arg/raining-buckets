import React from "react";
import Loader from "react-loader-spinner";
import usePlayer from "../../../hooks/react-query/usePlayer";
import {
  heightInFeetAndCm,
  teamAbbrevationToTeamName,
  weightInPoundsAndKg,
} from "../../../utils/Utils";
import {
  Meta,
  PlayerImage,
  PlayerName,
  Info,
  InfoText,
  JerseyWrapper,
  Jersey,
  JerseyNumber,
} from "./playerMeta.styles";
import jersey from "../../../assets/jersey.jpg";

type PlayerMetaProps = {
  playerId: string | undefined;
  isCompare?: boolean;
};

export default function PlayerMeta({ playerId, isCompare }: PlayerMetaProps) {
  const { isLoading, data, error } = usePlayer(playerId);
  return (
    <>
      {data && (
        <Meta isCompare={isCompare}>
          <PlayerImage
            src={`data:image/png;base64,${data.profilePicture}`}
            isCompare={isCompare}
          />
          <PlayerName
            isCompare={isCompare}
          >{`${data?.firstName} ${data.lastName}`}</PlayerName>
          <Info>
            <InfoText isCompare={isCompare}>
              {teamAbbrevationToTeamName(data.teamAbbreviation)}
            </InfoText>
            <InfoText isCompare={isCompare}>{data?.position}</InfoText>
            <InfoText isCompare={isCompare}>
              {heightInFeetAndCm(data.height)}
            </InfoText>
            <InfoText isCompare={isCompare}>
              {weightInPoundsAndKg(data.weight)}
            </InfoText>
            <InfoText isCompare={isCompare}>
              {new Date(data?.birthdate || "").toLocaleDateString()}
            </InfoText>
            <JerseyWrapper>
              <Jersey src={jersey} />
              <JerseyNumber>{data?.jerseyNumber}</JerseyNumber>
            </JerseyWrapper>
          </Info>
        </Meta>
      )}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#ff5e24"
          height={100}
          width={100}
          visible={true}
          style={{ margin: "auto" }}
        />
      )}
      {error && <p>There has been an error.</p>}
    </>
  );
}
