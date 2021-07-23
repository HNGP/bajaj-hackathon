const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
	socket.on("message", ({ name, message, room }) => {
		console.log(message, room);
		socket.to(room).emit("message", { name, message, room });
	});
	socket.on("join-room", (room) => {
		console.log(room);
		socket.join(room);
	});
});

http.listen(4000, function () {
	console.log("listening on port 4000");
});
