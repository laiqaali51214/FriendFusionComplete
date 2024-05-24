// documentation for postModel.js
// This file is used to create a schema for the post model.
// The schema is used to define the structure of the data that will be stored in the database.
// The schema is then used to create a model which is used to interact with the database.
// The model is used to perform CRUD operations on the database.
// The schema defines the fields that will be stored in the database and the type of data that will be stored in each field.
// The model is used to create, read, update, and delete data in the database.

import mongoose, { Schema } from "mongoose";

//schema
const postSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    description: { type: String, required: true },
    image: { type: String },
    likes: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  },
  { timestamps: true }
);

const Posts = mongoose.model("Posts", postSchema);

export default Posts;