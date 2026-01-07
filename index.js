import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.get("/", async (req, res) => {
  const payload = {
    sub: "1234567890",
    name: "John Doe",
    admin: true,
  };
  const token = jwt.sign({ payload }, "kkk", { expiresIn: "1s" });
  res.send("Vayo");
});
app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});
