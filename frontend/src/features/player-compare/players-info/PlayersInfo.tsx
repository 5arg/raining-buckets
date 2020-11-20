import React from "react";
import { useParams } from "react-router-dom";
import SearchDropdown from "../../common/search-dropdown/SearchDropdown";
import { Container } from "./playersInfo.styles";

interface ParamTypes {
  id1: string;
  id2?: string;
}

export default function PlayersInfo() {
  const { id1, id2 } = useParams<ParamTypes>();

  return (
    <Container>
      <SearchDropdown baseRoute={`/compare`} compareSecondId={id2} />
      <SearchDropdown baseRoute={`/compare`} compareFirstId={id1} />
    </Container>
  );
}
