const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");
const dbConnection = require("./database/config");

const app = express();
dbConnection();

require("dotenv").config();

// 3rd Party Modules
app.use(logger("dev"));
// app.use(helmet());
// app.use(cors);

// json or urlencoded
// req.body = { menulist }
app.use(express.json());

// POST /samshiseaki/auth/login
// POST /samshiseaki/auth/register
app.use("/samshiseaki/auth", require("./routes/auth"));
app.use("/samshiseaki/meal", require("./routes/meal"));

// listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sever is listening on port ${port}`);
});
