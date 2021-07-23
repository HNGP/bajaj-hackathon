import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./pages/Chat";
import Appointments from "./pages/Appointments";
import CurrentAppointent from "./pages/CurrentAppointment";
import Landing from "./pages/Landing";

const App = () => {
  const [connected, setConnected] = useState("");

  return (
    <div className="App">
      <div className="Content">
        <BrowserRouter>
          {/* <UserContext.Provider value={{ userData, setUserData }}> */}
          <div className="Nav"></div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/yourAppointments" component={Appointments} />

              <Route path="/currentAppointment" component={CurrentAppointent} />
              <Route path="/Chat" component={Chat} />
            </Switch>
          </div>
          {/* </UserContext.Provider> */}
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
