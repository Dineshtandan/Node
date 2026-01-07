import express from "express";
import userModel from "./index1";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use((express.static = "public"));

app.post("/signup", async (req, res) => {
  const { username, password } = res.body;
  await userModel.create({
    username: username,
    password: password,
  });
  req.redrict("./login.html");
});
