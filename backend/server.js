import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000; // Setting the port from environment variables or default to 5000

connectDB(); // Connecting to the database

const app = express(); // Initializing the express application

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(cookieParser()); // Middleware to parse cookies

// Routes for handling requests to /api/products, /api/users, and /api/orders
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

// Route for sending PayPal client ID
app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

const __dirname = path.resolve(); // Resolve the current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads"))); // Serve static files from the uploads directory

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build"))); // Serve static files from the React frontend build directory in production

  // Serve the index.html file for any unknown routes in production
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  // Root route that sends a simple response in development
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// Middleware for handling 404 errors
app.use(notFound);
// Middleware for handling errors
app.use(errorHandler);

// Starting the server and logging the environment and port
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
