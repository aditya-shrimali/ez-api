const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  leadId: Number,
  name: String,
  email: String,
  campaign: String,
});

module.exports = mongoose.model("Lead", LeadSchema);
