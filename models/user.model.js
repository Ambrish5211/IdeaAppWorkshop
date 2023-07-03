/*
this will hold the schema for the user

it explains the different fields of use and how it will be stored int the mongodb

*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name : {
      type: String,
      required: true
    },
    userId : {
      type: String,
      required : true,
      unique : true
    },
    password : {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true,
      unique: true,
      minLength : 10,
      lowercase : true
    },
    userType : {
      type : String,
      reuired : true,
      default : "CUSTOMER",
      enum : ["CUSTOMER", "ADMIN"]
    }

  },{timestamps: true}
);

// Define the collection name where it would be stored

mongoose.model("User",userSchema);