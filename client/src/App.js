import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import CurrentAppointent from "./pages/CurrentAppointment";
import Landing from "./pages/Landing";
import UserContext from "./context/userContext";
import SpecialistContext from "./context/specialistContext";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Payments from "./pages/Payments";

const App = () => {
  const [userData, setUserData] = useState({
    name: "Rahul",
    number: 9876543210,
    age: 42,
    sex: "M",
    blood_type: "O+ve",
    height: "150cm",
    allergies: "none",
  });
  const [specialist, setSpecialist] = useState("");

  return (
    <div className="App">
      <div className="Content">
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <SpecialistContext.Provider value={{ specialist, setSpecialist }}>
              <div className="Nav">
                <Navbar />
              </div>
              <div className="container">

                <Switch>
                  <Route exact path="/" component={Landing} />
                      <Route path="/payment" component={Payments} />
                  <Route
                    path="/confirmAppointment"
                    component={CurrentAppointent}
                  />

                  <Route exact path="/Chat" component={Chat} />
                  <Route exact path="/:roomId" component={ChatRoom} />
                </Switch>
              </div>
            </SpecialistContext.Provider>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
