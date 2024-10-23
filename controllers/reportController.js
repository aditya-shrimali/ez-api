const Lead = require("../models/Lead");
const Campaign = require("../models/Campaign");
const {
  generatePDFReport,
  generateCSVReport,
} = require("../utils/reportUtils");
const { fetchLeads, fetchCampaigns } = require("./dataController");

const generateReport = async (req, res) => {
  const leads = await fetchLeads();
  const campaigns = await fetchCampaigns();

  console.log(leads);
  console.log(campaigns);
  const reportType = req.query.type || "csv"; // Default to CSV

  if (reportType === "pdf") {
    const pdf = await generatePDFReport(leads, campaigns);
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  } else {
    const csv = generateCSVReport(leads, campaigns);
    res.setHeader("Content-Type", "text/csv");
    res.send(csv);
  }
};

module.exports = { generateReport };
