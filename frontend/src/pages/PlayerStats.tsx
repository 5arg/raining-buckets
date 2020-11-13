import React from "react";
import { useParams } from "react-router-dom";

interface ParamTypes {
  id: string;
}

export default function PlayerStats() {
  const { id } = useParams<ParamTypes>();

  return <div>{id}</div>;
}
