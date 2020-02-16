const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employee = require("./models/employee");
const empController = require("./controllers/employeeController");
const path = require("path");
const expressHB = require("express-handlebars");
mongoose
  .connect("mongodb://localhost:27017/employeeDB", { useNewUrlParser: true })
  .then(console.log("connected to mongo db"))
  .catch(err => {
    console.log("error in mongoDB" + err);
  });
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  expressHB({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/"
  })
);
app.set("view engine", "hbs");
app.use(bodyParser.json());
app.set("port", process.env.PORT || 5000);

// Start node server
app.listen(app.get("port"), function() {
  console.log("Node server is running on port " + app.get("port"));
});
app.use("/employee", empController);
require("./prod")(app);
module.exports.employee = employee;
