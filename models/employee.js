const mongoose = require("mongoose");
const joi = require("joi");
const employeeSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: "This field is required."
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});
// Custom validation for email
mongoose.model("Employee", employeeSchema);
employeeSchema.path("email").validate(val => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail.");
//module.exports.Employee = Employee;
