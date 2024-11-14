import dotenv from "dotenv";
dotenv.config();

import express from "express";
// Import body-parser using default import
import bodyParser from "body-parser";

import { connectToDatabase } from "./db/mongodb.js";

import shopRoutes from "./routes/shop.js";
import userRoutes from "./routes/user.js";
import serviceRoutes from "./routes/service.js";
import bookingRoutes from "./routes/booking.js";
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 3000;
const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase()
  .then(() => {
    app.use("/api/v1/shop", shopRoutes);
    app.use("/api/v1/user", userRoutes);
    app.use("/api/v1/service", serviceRoutes);
    app.use("/api/v1/booking", bookingRoutes);
    app.use("/api/v1/auth", authRoutes);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/api/v1/`);
    });
  })
  .catch((error) => {
    console.error("Could not start server:", error);
  });
