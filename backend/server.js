require("dotenv").config();
const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

/**
 * @desc  Connect to MongoDB database
 */
connectDB();

/**
 * @desc  Initialize Middleware
 */
app.use(cors()); //Enables Cross-Origin Resource Sharing
app.use(express.json()); //Parse JSON request bodies
// app.use(cookieParser()); //Parse cookies from requests

/**
 * @desc  API routes
 */
app.use("/api/questions", questionRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  const clientPath = path.resolve(__dirname, "client");
  app.use(express.static(clientPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

/**
 * @route   GET /api/checkHealth
 * @desc    Health check endpoint to verify API Status
 * @access  Public
 */
app.get("/api/checkHealth", (req, res) => {
  res.status(200).json({ message: "API is running..." });
});

/**
 * @desc  Global Error Handler Middleware
 */
app.use(errorHandler);

/**
 * @desc  Start Express Server
 */
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
