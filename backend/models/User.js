const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  employeeId: String,
  password: String,
 department: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Department",
},
  canAddPolicy: Boolean
});

module.exports = mongoose.model("User", userSchema);