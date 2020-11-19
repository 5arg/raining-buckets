import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

interface ParamTypes {
  id1: string;
  id2?: string;
}

export default function PlayersInfo() {
  const { id1, id2 } = useParams<ParamTypes>();

  useEffect(() => {
    console.log(id1, id2);
  }, [id1, id2]);

  return <div>players info</div>;
}
