import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";

interface ParamTypes {
  id: string;
}

export default function PlayerStats() {
  const { id } = useParams<ParamTypes>();

  return (
    <>
      <Header />
      {id}
      <Footer />
    </>
  );
}
