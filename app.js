import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
// Import body-parser using default import
import bodyParser from "body-parser";

// import { connectToDatabase } from "./db/mongodb.js";

import shopRoutes from "./routes/shop.js";
import userRoutes from "./routes/user.js";
import serviceRoutes from "./routes/service.js";
import bookingRoutes from "./routes/booking.js";
import authRoutes from "./routes/auth.js";

const PORT = process.env.PORT || 3000;
const MONGO_PROD_URI = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@car-shop-services.iengd.mongodb.net/?retryWrites=true&w=majority&appName=Car-shop-services`;

const app = express();

app.use(express.json());

app.use("/api/v1/shop", shopRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/booking", bookingRoutes);
app.use("/api/v1/auth", authRoutes);

mongoose
  .connect(MONGO_PROD_URI, {})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/api/v1/`);
    });
  })
  .catch((err) => console.log(err));
