const axios = require("axios");
const Lead = require("../models/Lead");
const Campaign = require("../models/Campaign");

// Dummy function to simulate fetching CRM data
const fetchLeads = async () => {
  // Simulating an external API call for leads
  return [
    {
      leadId: 1,
      name: "John Doe",
      email: "john@example.com",
      campaign: "Google Ads",
    },
    {
      leadId: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      campaign: "Facebook Ads",
    },
  ];
};

// Dummy function to simulate fetching campaign data
const fetchCampaigns = async () => {
  // Simulating an external API call for campaigns
  return [
    { campaignId: 1, name: "Google Ads", budget: 1000, leadsGenerated: 50 },
    { campaignId: 2, name: "Facebook Ads", budget: 500, leadsGenerated: 20 },
  ];
};

const etlProcess = async () => {
  const leads = await fetchLeads();
  const campaigns = await fetchCampaigns();

  // Transform and Save Leads
  leads.forEach(async (lead) => {
    const newLead = new Lead(lead);
    await newLead.save();
  });

  // Transform and Save Campaigns
  campaigns.forEach(async (campaign) => {
    const newCampaign = new Campaign(campaign);
    await newCampaign.save();
  });
};

module.exports = { fetchLeads, fetchCampaigns, etlProcess };
