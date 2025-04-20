import * as functions from "firebase-functions";
import express from "express";

const app = express();

// Example endpoint
app.get("/ping", (req, res) => {
  res.send("Pong from backend!");
});

// Export the Express app as a Firebase Function
export const api = functions.https.onRequest(app);
