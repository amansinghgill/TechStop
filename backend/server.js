import express from "express"; // Importing the express library to create the server
import dotenv from "dotenv"; // Importing dotenv to handle environment variables
import cookieParser from "cookie-parser"; // Importing cookie-parser to parse cookies in requests
dotenv.config(); // Configuring dotenv to load environment variables from a .env file

import connectDB from "./config/db.js"; // Importing the database connection function
import productRoutes from "./routes/productRoutes.js"; // Importing the product routes
import userRoutes from "./routes/userRoutes.js"; // Importing the user routes
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"; // Importing custom error handling middleware

const port = process.env.PORT || 5000; // Setting the port from environment variables or default to 5000

connectDB(); // Connecting to the database

const app = express(); // Initializing the express application

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(cookieParser()); // Middleware to parse cookies

// Routes for handling requests to /api/products and /api/users
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running..."); // Root route that sends a simple response
});

// Middleware for handling 404 errors
app.use(notFound);
// Middleware for handling errors
app.use(errorHandler);

// Starting the server and logging the environment and port
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
