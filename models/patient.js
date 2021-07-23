const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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
      docid: String,
      docname: String,
      appointmentid: String,
      roomid: String,
    },
  ],
  photo: {
    type: String,
  },
  symptoms: {
    type: String,
  },
});

module.exports = Patient = mongoose.model("patient", patientSchema);
