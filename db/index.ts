import { Schema } from "mongoose";

const mongoose = require("mongoose");
const fs = require("fs");
const ini = require("ini");

const credFile = fs.readFileSync("config.ini", "utf-8");

const config = ini.parse(credFile);

const DB_URI = config.credentials.DB_CONNECT_URI;
const DB_CONNECT_URI = DB_URI;

async function main() {
  await mongoose.connect(DB_CONNECT_URI);
}

main().catch((err) => console.log(err));

//adminSchema
const AdminSchema: Schema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
  email: String,
  country: {
    type: String,
    required: true,
  },
});

//userSchema
const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

//courseSchema
const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = { Admin, User, Course };
