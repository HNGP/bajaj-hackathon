import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import Appointments from "./pages/Appointments";
import CurrentAppointent from "./pages/CurrentAppointment";
import Landing from "./pages/Landing";
import io from "socket.io-client";
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
  const [state, setState] = useState({ message: "", name: "", room: "" });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("message", ({ name, message, room }) => {
      setChat([...chat, { name, message, room }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onMessageSubmit = (e) => {
    const { name, message, room } = state;
    socketRef.current.emit("join-room", room);
    socketRef.current.emit("message", { name, message, room });
    e.preventDefault();
    setState({ message: "", name, room });
  };

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
                {/* <button onClick={onMessageSubmit}> Send button</button> */}
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/yourAppointments" component={Appointments} />
                  <Route path="/payment" component={Payments} />
                  <Route
                    path="/currentAppointment"
                    component={CurrentAppointent}
                  />
                  {/* <Route path="/Chat" component={Chat} /> */}
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
