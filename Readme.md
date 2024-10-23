# EzyMetrics Backend

## Overview

EzyMetrics is a backend service designed for data integrations and reporting for marketing campaigns. It integrates with dummy CRM and marketing platforms to fetch lead and campaign data, processes that data, and provides reporting capabilities in both PDF and CSV formats. This project aims to help users visualize their marketing performance through structured reporting.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Generate Reports](#generate-reports)
- [Sample Data Structure](#sample-data-structure)
  - [Leads](#leads)
  - [Campaigns](#campaigns)

## Features

- **API Service Development**: Integrates with dummy CRM and marketing platforms.
- **Data Fetching**: Simulated fetching of lead and campaign data.
- **Data Storage and Processing**: Uses a relational or NoSQL database for data storage and ETL processes to derive meaningful metrics.
- **Reporting**: Generates reports in PDF and CSV formats.
- **Notifications**: Basic email notifications for alerts based on specified conditions.

## Technology Stack

- Node.js
- Express.js
- PDFKit (for PDF generation)
- json2csv (for CSV generation)
- MongoDB or PostgreSQL (as per your choice)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- NPM (Node Package Manager)
- A relational or NoSQL database setup (if applicable)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ezyMetrics-backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up your environment variables**: Create a `.env` file in the root directory and add your configuration settings if needed.

### Running the Application

Start the server:

```bash
npm start
```

The server should be running on [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Fetch Leads and Campaings

- **GET `/api/data/leads`**: Fetch all the leads data
- **GET `/api/data/campaigns`**: Fetch all the campaings data

### Generate Reports

- **GET `/api/report?type=pdf`**: Generates a PDF report for leads and campaigns. Returns the path to the generated PDF file.
- **GET `/api/report?type=csv`**: Generates a CSV report for leads and campaigns. Returns the path to the generated CSV file.

## Sample Data Structure

### Leads

```json
[
  {
    "leadId": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "campaign": "Google Ads"
  },
  {
    "leadId": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "campaign": "Facebook Ads"
  }
]
```

### Campaigns

```json
[
  {
    "campaignId": 1,
    "name": "Google Ads",
    "budget": 1000,
    "leadsGenerated": 50
  },
  {
    "campaignId": 2,
    "name": "Facebook Ads",
    "budget": 500,
    "leadsGenerated": 20
  }
]
```
