import React from "react";
import { useParams } from "react-router-dom";

interface ParamTypes {
  id: string;
}

export default function PlayerProfile() {
  const { id } = useParams<ParamTypes>();

  return <>{id}</>;
}
