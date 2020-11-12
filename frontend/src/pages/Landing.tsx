import React from "react";
import Footer from "../features/footer/Footer";
import Jumbotron from "../features/jumbotron/Jumbotron";
import PlayerSearch from "../features/player-search/PlayerSearch";

export default function Landing() {
  return (
    <>
      <Jumbotron />
      <PlayerSearch />
      <Footer />
    </>
  );
}
