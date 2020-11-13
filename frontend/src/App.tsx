import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/Landing";
import PlayerProfile from "./pages/PlayerProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <MainLayout>
            <Route exact path="/player/:id">
              <PlayerProfile />
            </Route>
          </MainLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
