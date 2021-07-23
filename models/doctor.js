const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialization: {
    type: String,
  },
  rating: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
  appointments: [
    {
      patientid: String,
      time: String,
      appointmentid: String,
      roomid: String,
    },
  ],
  photo: {
    type: String,
  },
  onlineStatus: {
    type: String,
  },
});

module.exports = Doctor = mongoose.model("doctor", DoctorSchema);