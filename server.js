const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Route files
const manjas = require("./routes/manjas_routes");

// Load env vars
dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT || 5000;

// Load logger
const logger = require("./middleware/logger");

const jsonData = require("./dataStorage/theData.json");

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.use(logger)

// Mount routers
app.use("/api/v1/manjas", manjas)

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));