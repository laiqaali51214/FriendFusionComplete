// documentation for userModel.js 
// This file is used to create a schema for the user model.
// The schema is used to define the structure of the data that will be stored in the database.
// The schema is then used to create a model which is used to interact with the database.
// The model is used to perform CRUD operations on the database.
// The schema defines the fields that will be stored in the database and the type of data that will be stored in each field.
// The model is used to create, read, update, and delete data in the database.
// The schema is created using the mongoose library which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
import mongoose, { Schema } from "mongoose";

//schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Required!"],
    },
    email: {
      type: String,
      required: [true, " Email is Required!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
      minlength: [6, "Password length should be greater than 6 character"],
      select: true,
    },
    location: { type: String },
    profileUrl: { type: String },
    profession: { type: String },
    friends: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    views: [{ type: String }],
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);


const Users = mongoose.model("Users", userSchema);

export default Users;