import mongoose from "mongoose";
mongoose.connect("mongodb://12.0.0.1:27017/attendance");

const userSchema = mongoose.Schema({
  name: String,
  employee_id: String,
  department: String,
  email: String,
  password: String,
});

const userAttendanceSchema = mongoose.Schema({
  name: String,
  day: String,
  attendanceStatus: String,
  date: Number,
  month: Number,
  year: Number,
  checkinTime: Number,
  checkoutTime: Number,
});

const user = mongoose.model("user", userSchema);
const userAttendance = mongoose.model("userAttendance", userAttendanceSchema);

module.export = {
  user,
  userAttendance,
};
