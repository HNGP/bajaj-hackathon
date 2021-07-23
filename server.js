const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  const start = "Front-end and backend connected";

  return res.json(start);
});

app.get("/login", (req, res) => {
  const start = "The Login Page";

  return res.json(start);
});

app.get("/logout", (req, res) => {
  const start = "The Logout Page";

  return res.json(start);
});

app.get("/patient/getappointment/:id", (req, res) => {
  const start = "Book An Appointment";

  return res.json(start);
});

app.get("/patient/cancelappointment/:id", (req, res) => {
  const start = "Cancel An Appointment";

  return res.json(start);
});

app.get("/patient/reschedule/:id", (req, res) => {
  const start = "Reschedule An Appointment";

  return res.json(start);
});

app.get("/patient/getappointment/:id", (req, res) => {
  const start = "Book An Appointment";

  return res.json(start);
});

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
