// server.js

const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a data object
  const data = {
    Name: name,
    Email: email,
    Message: message,
    Timestamp: new Date().toLocaleString() // Example timestamp
  };

  // Update Excel file with new data
  updateExcelFile(data);

  // Respond to client
  res.status(200).json({ message: 'Form submission recorded successfully!' });
});

// Function to update Excel file
function updateExcelFile(data) {
  const filePath = path.join(__dirname, 'form-submissions.xlsx');
  let workbook;

  try {
    // Check if file exists, if not create new workbook
    if (fs.existsSync(filePath)) {
      workbook = xlsx.readFile(filePath);
    } else {
      workbook = xlsx.utils.book_new();
    }

    const sheetName = 'Submissions';
    const sheet = workbook.Sheets[sheetName] || xlsx.utils.aoa_to_sheet([]);

    // Append new data to sheet
    const newRow = xlsx.utils.sheet_add_json(sheet, [data], { origin: -1 });
    workbook.Sheets[sheetName] = newRow;

    // Write back to file
    xlsx.writeFile(workbook, filePath);
    console.log('Excel file updated successfully.');

  } catch (error) {
    console.error('Error updating Excel file:', error);
  }
}

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
