const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Patient = require("./models/patient.js");
const Doctor = require("./models/doctor.js");
const Appointment = require("./models/appointment.js");
const { exec } = require("child_process");

//middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://tbUser:tbUserPass@cluster0.ccwyq.mongodb.net/bajaj?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	}
);
mongoose.connection.on("error", (err) => {
	console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
	console.log("Mongoose is connected");
});

app.get("/api", async (req, res) => {
	const user = await Doctor.find({});
	if (!user) {
		return res.status(400).json({ msg: "User does not exist" });
	}
	return res.json(user);
});

app.get("/appointment", async (req, res) => {
	const user = await Appointment.findById("60f9709cab377a8c32e82c5d");
	if (!user) {
		return res.status(400).json({ msg: "User does not exist" });
	}
	return res.json(user);
});

app.get("/login", async (req, res) => {
	const user = await Patient.find({});
	if (!user) {
		return res.status(400).json({ msg: "User does not exist" });
	}
	return res.json(user);
});

app.get("/logout", (req, res) => {
	const start = "The Logout Page";

	return res.json(start);
});

app.get("/patient/getappointment/:id", async (req, res) => {
	const appId = req.params.id;
	const appointment = await Appointment.findById(appId);
	if (!appointment) {
		return res.status(400).json({ msg: "Appointment does not exist" });
	}

	const doctor = await Doctor.findById(appointment.docid);
	if (!doctor) {
		return res.status(400).json({ msg: "Doctor does not exist" });
	}

	const patient = await Patient.findById(appointment.patientid);
	if (!patient) {
		return res.status(400).json({ msg: "Patient does not exist" });
	}

	const result = {
		appointment: appointment,
		doctorName: doctor.name,
		patientName: patient.name,
	};
	return res.json(result);
});

app.get("/patient/cancelAppointment/:id", async (req, res) => {
	let appid = req.params.id;
	const user = await Appointment.findOneAndUpdate(
		{ _id: appid },
		{ status: "inactive" }
	);
	if (!user) {
		return res.status(400).json({ msg: "Appointment does not exist" });
	}
	const patient = await Patient.findOne({ _id: user.patientid });
	const doctor = await Doctor.findOne({ _id: user.docid });
	if (!patient) {
		return res.status(400).json({ msg: "Patient does not exist" });
	} else {
		Patient.findOneAndUpdate(
			{ _id: user.patientid },
			{ $pull: { appointments: { appointmentid: appid } } },
			{ new: true },
			function (err) {
				if (err) {
					console.log(err);
				}
			}
		);
		Doctor.findOneAndUpdate(
			{ _id: user.docid },
			{ $pull: { appointments: { appointmentid: appid } } },
			{ new: true },
			function (err) {
				if (err) {
					console.log(err);
				}
			}
		);
	}

	return res.json(doctor);
});

app.get("/patient/reschedule/:id", (req, res) => {
	const start = "Reschedule An Appointment";

	return res.json(start);
});

app.get("/chat", (req, res) => {
	exec("npm run socket", (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.error(`stderr: ${stderr}`);
	});
});

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
