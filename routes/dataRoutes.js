const express = require("express");
const { fetchLeads, fetchCampaigns } = require("../controllers/dataController");
const router = express.Router();

router.get("/leads", async (req, res) => {
  const leads = await fetchLeads();
  res.json(leads);
});

router.get("/campaigns", async (req, res) => {
  const campaigns = await fetchCampaigns();
  res.json(campaigns);
});

module.exports = router;
