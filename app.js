const express = require("express");
const app = express();
const logger = require("morgan");
var bodyParser = require("body-parser");
const router = require("express-promise-router")();
const auth = require("./auth/verify-token");

//MiddleWares
app.use(logger("dev"));
// parse requests of content-type - application/json
app.use(bodyParser.json());

 //Catch 404 errors and pass them to Error Handler
//  app.use ((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });
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

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/users", require("./routes/user_route"));
app.use("/auth", require("./auth/index"));
app.use("/signup", require("./routes/register_route"));
app.use("/news", require("./routes/news_route"));
app.use("/teammembers", require("./routes/teammembers_route"));
app.use("/technology", require("./routes/technology_route"));

// Start the Server
const port = app.get("port") || 8000;
app.listen(port, () => {
  console.log("Listening to PORT " + port);
});
