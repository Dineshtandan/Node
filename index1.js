import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/CRUD");

const userscheme = mongoose.Schema({
  username: String,
  password: String,
});
const usermodel = mongoose.model("user", userscheme);

export default usermodel;
