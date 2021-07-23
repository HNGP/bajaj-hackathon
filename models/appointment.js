const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  docid: {
    type: String,
  },
  patientid: {
    type: String,
  },
  starttime: {
    type: String,
  },
  endtime: {
    type: String,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = Appointment = mongoose.model("appointment", AppointmentSchema);
