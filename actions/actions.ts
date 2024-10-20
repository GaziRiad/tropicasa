"use server";

import { google } from "googleapis";
import { JWT } from "google-auth-library";

// Replace these with your actual values
const SPREADSHEET_ID = "1DgmLlNBA4WDKUzCM5ztnumTAy8x6kevfxeg4Aq1QuKM";
const RANGE = "Resources!A:H"; // Adjust this to your desired range

// Load the service account key JSON file
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

// Cache the fetchSheetData function
const cachedFetchSheetData = async () => {
  try {
    const sheets = google.sheets({ version: "v4", auth: serviceAccountAuth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;
    if (rows?.length) {
      // Assuming the first row contains headers
      const headers = rows[0];
      const data = rows.slice(1).map((row) => {
        return headers.reduce((obj, header, index) => {
          obj[header] = row[index];
          return obj;
        }, {});
      });
      return { success: true, data };
    } else {
      return { success: false, error: "No data found." };
    }
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return { success: false, error: "Failed to fetch data." };
  }
};

export async function fetchSheetData() {
  return cachedFetchSheetData();
}

export async function fetchDataByTitle(id: string) {
  console.log(id);
  const result = await cachedFetchSheetData();
  if (result.success) {
    const filteredData = result?.data?.filter((item) => item.ID === id);
    return { success: true, data: filteredData![0] };
  } else {
    return result; // Return the error if fetching failed
  }
}

// export async function fetchAllTopics() {
//   const result = await cachedFetchSheetData();
//   if (result.success) {
//     const topics = Array.from(new Set(result?.data?.map((item) => item.Topic)));
//     return { success: true, data: topics };
//   } else {
//     return result; // Return the error if fetching failed
//   }
// }
