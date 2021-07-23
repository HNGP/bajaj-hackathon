import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat";
import Appointments from "./pages/Appointments";
import CurrentAppointent from "./pages/CurrentAppointment";
import Landing from "./pages/Landing";
import io from "socket.io-client";

const App = () => {
	// const [connected, setConnected] = useState("");
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
					{/* <UserContext.Provider value={{ userData, setUserData }}> */}
					<div className="Nav"></div>
					<div className="container">
						<button onClick={onMessageSubmit}> Send button</button>
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
