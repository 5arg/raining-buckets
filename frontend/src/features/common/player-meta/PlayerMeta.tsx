import React from "react";
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
  flexValue: string;
};

export default function PlayerMeta({ playerId, flexValue }: PlayerMetaProps) {
  const { isLoading, data, error } = usePlayer(playerId);
  return (
    <>
      {data && (
        <Meta flex={flexValue}>
          <PlayerImage src={`data:image/png;base64,${data.profilePicture}`} />
          <PlayerName>{`${data?.firstName} ${data.lastName}`}</PlayerName>
          <Info>
            <InfoText>
              {teamAbbrevationToTeamName(data.teamAbbreviation)}
            </InfoText>
            <InfoText>{data?.position}</InfoText>
            <InfoText>{heightInFeetAndCm(data.height)}</InfoText>
            <InfoText>{weightInPoundsAndKg(data.weight)}</InfoText>
            <InfoText>
              {new Date(data?.birthdate || "").toLocaleDateString()}
            </InfoText>
            <JerseyWrapper>
              <Jersey src={jersey} />
              <JerseyNumber>{data?.jerseyNumber}</JerseyNumber>
            </JerseyWrapper>
          </Info>
        </Meta>
      )}
      {isLoading && <p>Loading</p>}
      {error && <p>There has been an error.</p>}
    </>
  );
}
