import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/join-room">
            <JoinRoomPage />
          </Route>
          <Route path="/room">
            <RoomPage />
          </Route>
          <Route path="/">
            <IntroductionPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
