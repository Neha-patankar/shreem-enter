const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// Middleware
app.use(cors({
  origin : process.env.FRONTEND_URL,
  credentials : true
}));
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(cookieParser());

// Routes
app.use("/api", router);

const PORT = process.env.PORT || 8085;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to DB");
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });
