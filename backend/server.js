import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT;

connectDB();

const app = express();

// Define a simple route for the root URL
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server running on port ${port}`));

// Define routes for products and users
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

// Middleware to handle 404 Not Found errors
app.use(notFound);
app.use(errorHandler);
