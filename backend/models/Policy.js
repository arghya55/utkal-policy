const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date },

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Policy", policySchema);