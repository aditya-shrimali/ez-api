const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  campaignId: Number,
  name: String,
  budget: Number,
  leadsGenerated: Number,
});

module.exports = mongoose.model("Campaign", CampaignSchema);
