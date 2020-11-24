import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import ScrollToTop from "./helpers/ScrollToTop";
import MainLayout from "./layout/MainLayout";
import Info from "./pages/Info";
import Landing from "./pages/Landing";
import PlayerCompare from "./pages/PlayerCompare";
import PlayerProfile from "./pages/PlayerProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <MainLayout>
            <Route exact path="/player/:id">
              <PlayerProfile />
            </Route>
            <Route exact path="/compare/:id1/:id2?">
              <PlayerCompare />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
