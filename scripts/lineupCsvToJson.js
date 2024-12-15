// Lineup CSV to JSON converter
// Usage: node scripts/lineupCsvToJson.js <input.csv> <output.json>

const csv = require("csv-parser");
const fs = require("fs");

const csvFilePath = process.argv[2];
const jsonFilePath = process.argv[3];

const results = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
    console.log("CSV file successfully processed");
  });
