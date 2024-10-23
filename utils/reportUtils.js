const fs = require("fs");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");
const path = require("path");

const ensureReportsFolderExists = () => {
  const reportsFolder = path.join(__dirname, "..", "reports");
  if (!fs.existsSync(reportsFolder)) {
    fs.mkdirSync(reportsFolder); // Create the folder if it doesn't exist
  }
};

const generateCSVReport = async (data) => {
  try {
    ensureReportsFolderExists(); // Ensure the reports folder exists

    const fields = Object.keys(data[0]); // Extract fields from the first object
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);

    // Define the file path for the CSV
    const filePath = path.join(__dirname, "..", "reports", "report.csv");

    // Save the CSV to a file
    fs.writeFileSync(filePath, csv);
    return filePath;
  } catch (error) {
    throw new Error(`Error generating CSV report: ${error.message}`);
  }
};

const generatePDFReport = async (data) => {
  try {
    ensureReportsFolderExists(); // Ensure the reports folder exists

    // Define the file path for the PDF
    const filePath = path.join(__dirname, "..", "reports", "report.pdf");

    // Check if the data is empty
    if (!data || data.length === 0) {
      throw new Error("No data provided to generate the PDF report.");
    }

    // Create a new PDF document
    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Add a title
    doc.fontSize(25).text("Lead and Campaign Report", { align: "center" });

    // Add a section for Leads
    doc.moveDown();
    doc.fontSize(20).text("Leads", { underline: true });
    doc.moveDown();
    data.forEach((item, index) => {
      doc.fontSize(12).text(`Lead ID: ${item.leadId}`);
      doc.text(`Name: ${item.name}`);
      doc.text(`Email: ${item.email}`);
      doc.text(`Campaign: ${item.campaign}`);
      doc.moveDown();
    });

    // Add a section for Campaigns
    doc.addPage(); // Start a new page for campaigns
    doc.fontSize(20).text("Campaigns", { underline: true });
    doc.moveDown();
    data.forEach((item, index) => {
      doc.fontSize(12).text(`Campaign ID: ${item.campaignId}`);
      doc.text(`Name: ${item.name}`);
      doc.text(`Budget: $${item.budget}`);
      doc.text(`Leads Generated: ${item.leadsGenerated}`);
      doc.moveDown();
    });

    // Finalize the PDF and end the stream
    doc.end();

    // Return a promise that resolves when the write stream finishes
    return new Promise((resolve, reject) => {
      writeStream.on("finish", () => {
        console.log("PDF generated successfully:", filePath);
        resolve(filePath);
      });
      writeStream.on("error", (err) => {
        console.error("Error writing PDF file:", err);
        reject(`Error writing PDF file: ${err.message}`);
      });
    });
  } catch (error) {
    console.error(`Error generating PDF report: ${error.message}`);
    throw new Error(`Error generating PDF report: ${error.message}`);
  }
};

module.exports = {
  generateCSVReport,
  generatePDFReport,
};
