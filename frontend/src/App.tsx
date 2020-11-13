import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PlayerStats from "./pages/PlayerStats";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/player/:id">
            <PlayerStats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
