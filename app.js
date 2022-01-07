const express = require("express");
const app = express();
const logger = require("morgan");
var bodyParser = require("body-parser");
const router = require("express-promise-router")();
const auth = require("./auth/verify-token");
var cors = require("cors");

//MiddleWares
app.use(logger("dev"));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/users", cors(), require("./routes/user_route"));
app.use("/auth", cors(), require("./auth/index"));
app.use("/signup", cors(), require("./routes/register_route"));
app.use("/news", cors(), require("./routes/news_route"));
app.use("/teammembers", cors(), require("./routes/teammembers_route"));
app.use("/technology", cors(), require("./routes/technology_route"));
app.use("/projects", cors(), require("./routes/projects_route"));

//Catch 404 errors and pass them to Error Handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
//Error Handler Function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  //Response to Client
  res.status(status).json({
    error: {
      message: error.message,
    },
  });

  // Respond to ourselves
  console.error(err);
});
// Start the Server
const port = app.get("port") || 8000;
app.listen(port, () => {
  console.log("Listening to PORT " + port);
});
