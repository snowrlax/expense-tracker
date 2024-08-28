import express from "express";
import rootRouter from "./routes/EntryRoutes";
var cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/entry", rootRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}!`);
});

app.listen(3000, () => {
  console.log("running on port 3000!");
});
