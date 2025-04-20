// src/index.ts
import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { connectDatabase } from './config/database'; // Replace with your DB config file
import { routes } from './routes'; // Replace with your route definitions

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Database connection
connectDatabase().then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.error('Database connection error:', error);
});

// Routes
app.use('/api', routes);  // Your route handling

// Server bootstrap
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
